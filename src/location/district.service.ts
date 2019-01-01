import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { District } from './district.entity';

@Injectable()
export class DistrictService {
  constructor(
    @InjectEntityManager()
    private readonly manager: EntityManager,
  ) {}

  async getManyByCityId(cid: number, fields?: string[]): Promise<District[]> {
    let qb = this.manager.createQueryBuilder(District, 'd').where('d."cityId" = :cid', { cid });

    if (fields) {
      qb = qb.select(fields.map((field) => `d.${field}`));
    }

    return qb.getMany();
  }
}
