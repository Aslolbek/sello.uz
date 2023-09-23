import { Test, TestingModule } from '@nestjs/testing';
import { BrendController } from './brend.controller';
import { BrendService } from './brend.service';

describe('BrendController', () => {
  let controller: BrendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrendController],
      providers: [BrendService],
    }).compile();

    controller = module.get<BrendController>(BrendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
