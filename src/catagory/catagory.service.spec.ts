import { Test, TestingModule } from '@nestjs/testing';
import { CatagoryService } from './catagory.service';

describe('CatagoryService', () => {
  let service: CatagoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatagoryService],
    }).compile();

    service = module.get<CatagoryService>(CatagoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
