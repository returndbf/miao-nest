import { Test, TestingModule } from '@nestjs/testing';
import { GetGoodsService } from './get-goods.service';

describe('GetGoodsService', () => {
  let service: GetGoodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetGoodsService],
    }).compile();

    service = module.get<GetGoodsService>(GetGoodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
