import { createConnection } from 'typeorm';
import { createLogger, transports, format } from 'winston';
import { City } from '../location/city.entity';
import { District } from '../location/district.entity';
import * as fs from 'fs';
import * as path from 'path';

const logger = createLogger({
  format: format.combine(format.splat(), format.simple(), format.cli(), format.colorize()),
  transports: [new transports.Console()],
});

interface SourceCity {
  name: string;
  slug: string;
  type: string;
  name_with_type: string;
  code: string;
}

interface SourceCities {
  [code: string]: SourceCity;
}

interface SourceDistrict {
  name: string;
  slug: string;
  type: string;
  name_with_type: string;
  path: string;
  path_with_type: string;
  code: string;
  parent_code: string;
}

interface SourceDistricts {
  [code: string]: SourceDistrict;
}

const connectionName = process.argv[2] || 'default';

createConnection(connectionName)
  .then(async (connection) => {
    const sourceCities = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'data/tinh_tp.json'), 'utf8'),
    ) as SourceCities;
    const sourceDistricts = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, './data/quan_huyen.json'), 'utf8'),
    ) as SourceDistricts;

    const cities = Object.keys(sourceCities)
      .sort()
      .reduce<{ [code: string]: City }>((p, c) => {
        const intCode = parseInt(c, 10);
        const { code, ...city } = sourceCities[c];
        p[c] = connection.manager.create(City, {
          id: intCode,
          ...city,
          nameWithType: city.name_with_type,
          districts: [],
        });
        return p;
      }, {});

    Object.keys(sourceDistricts).forEach((c) => {
      const intCode = parseInt(c, 10);
      const { code, ...district } = sourceDistricts[c];
      cities[district.parent_code].districts = [
        ...cities[district.parent_code].districts,
        connection.manager.create(District, {
          id: intCode,
          ...district,
          nameWithType: district.name_with_type,
        }),
      ];
    });

    await connection.manager.save(
      City,
      Object.keys(cities)
        .sort()
        .map((k) => cities[k]),
    );
    await connection.close();
  })
  .catch((err) => logger.error(err));
