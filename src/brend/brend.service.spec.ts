import { Test, TestingModule } from '@nestjs/testing';
import { BrendService } from './brend.service';

describe('BrendService', () => {
  let service: BrendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrendService],
    }).compile();

    service = module.get<BrendService>(BrendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
