import { Test, TestingModule } from '@nestjs/testing';
import { CatagoryController } from './catagory.controller';
import { CatagoryService } from './catagory.service';

describe('CatagoryController', () => {
  let controller: CatagoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatagoryController],
      providers: [CatagoryService],
    }).compile();

    controller = module.get<CatagoryController>(CatagoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
