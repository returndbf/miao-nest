import { Test, TestingModule } from '@nestjs/testing';
import { GetGoodsController } from './get-goods.controller';
import { GetGoodsService } from './get-goods.service';

describe('GetGoodsController', () => {
  let controller: GetGoodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetGoodsController],
      providers: [GetGoodsService],
    }).compile();

    controller = module.get<GetGoodsController>(GetGoodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
