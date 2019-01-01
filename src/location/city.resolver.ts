import { Resolver, Args, Query, Context, Info, ResolveProperty, Parent } from '@nestjs/graphql';
import { CityService } from './city.service';
import { City } from '../graphql';
import { GraphQLResolveInfo } from 'graphql';
import graphqlFields = require('graphql-fields');
import { DistrictService } from './district.service';
import { District } from './district.entity';

@Resolver('City')
export class CityResolver {
  constructor(private readonly cityService: CityService, private readonly districtService: DistrictService) {}

  @Query('city')
  async getCity(@Args('id') id: number, @Info() info: GraphQLResolveInfo): Promise<City | undefined> {
    return this.cityService.getOne(id, Object.keys(graphqlFields(info)).filter((f) => f !== 'districts'));
  }

  @ResolveProperty('districts')
  async getDistricts(@Parent() city: City, @Info() info: GraphQLResolveInfo): Promise<District[]> {
    const { id } = city;
    return this.districtService.getManyByCityId(id, Object.keys(graphqlFields(info)));
  }
}
