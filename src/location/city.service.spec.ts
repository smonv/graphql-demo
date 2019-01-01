import { Test, TestingModule } from '@nestjs/testing';
import { CityService } from './city.service';

describe('CityService', () => {
  let service: CityService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CityService],
    }).compile();
    service = module.get<CityService>(CityService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
