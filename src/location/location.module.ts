import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityResolver } from './city.resolver';
import { DistrictService } from './district.service';

@Module({
  providers: [CityService, CityResolver, DistrictService],
})
export class LocationModule {}
