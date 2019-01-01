import { Resolver, Args, Query, Context, Info, ResolveProperty, Parent } from '@nestjs/graphql';
import { CityService } from './city.service';
import { GraphQLResolveInfo } from 'graphql';
import graphqlFields = require('graphql-fields');
import { DistrictService } from './district.service';
import { District } from './district.entity';
import { City } from './city.entity';
import { Resolver as TypeResolver, Query as TypeQuery, Arg as TypeArg, Int, FieldResolver, Root } from 'type-graphql';

@TypeResolver(() => City)
@Resolver('City')
export class CityResolver {
  constructor(private readonly cityService: CityService, private readonly districtService: DistrictService) {}

  @TypeQuery(() => City, { name: 'city' })
  @Query('city')
  async getCity(
    @TypeArg('id', () => Int) @Args('id') id: number,
    @Info() info: GraphQLResolveInfo,
  ): Promise<City | undefined> {
    return this.cityService.getOne(id, Object.keys(graphqlFields(info)).filter((f) => f !== 'districts'));
  }

  @FieldResolver(() => [District], { name: 'districts', defaultValue: [] })
  @ResolveProperty('districts')
  async getDistricts(
    @Root() @Parent() city: City,
    @TypeArg('limit', () => Int, { nullable: true, defaultValue: 10 }) @Args('limit') limit: number,
    @Info() info: GraphQLResolveInfo,
  ): Promise<District[]> {
    const { id } = city;
    return this.districtService.getManyByCityId(id, Object.keys(graphqlFields(info)));
  }
}
