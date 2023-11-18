import { Module } from '@nestjs/common';
import { GetGoodsService } from './get-goods.service';
import { GetGoodsController } from './get-goods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetGoods } from './entities/get-good.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GetGoods])],
  controllers: [GetGoodsController],
  providers: [GetGoodsService],
})
export class GetGoodsModule {}
