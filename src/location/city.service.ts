import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { City } from './city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectEntityManager()
    private readonly manager: EntityManager,
  ) {}

  async getOne(id: number, cityFields?: string[], districtFields?: string[]): Promise<City | undefined> {
    if (cityFields) {
      return this.manager
        .createQueryBuilder(City, 'c')
        .leftJoinAndSelect('c.districts', 'd')
        .select(cityFields.map((field) => `c.${field}`).concat(districtFields.map((df) => `d.${df}`)))
        .getOne();
    }
    return this.manager.findOne(City, id);
  }
}
