import { Module } from '@nestjs/common';
import { GetGoodsService } from './get-goods.service';
import { GetGoodsController } from './get-goods.controller';

@Module({
  controllers: [GetGoodsController],
  providers: [GetGoodsService],
})
export class GetGoodsModule {}
