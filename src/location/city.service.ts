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

  async getOne(id: number, fields?: string[]): Promise<City | undefined> {
    if (fields) {
      return this.manager
        .createQueryBuilder(City, 'c')
        .select(fields.map((field) => `c.${field}`))
        .getOne();
    }
    return this.manager.findOne(City, id);
  }
}
