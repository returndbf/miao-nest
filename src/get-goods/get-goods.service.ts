import { Injectable } from '@nestjs/common';
import { CreateGetGoodDto } from './dto/create-get-good.dto';
import { UpdateGetGoodDto } from './dto/update-get-good.dto';

@Injectable()
export class GetGoodsService {
  create(createGetGoodDto: CreateGetGoodDto) {
    return 'This action adds a new getGood';
  }

  findAll() {
    return `This action returns all getGoods`;
  }

  findOne(id: number) {
    return `This action returns a #${id} getGood`;
  }

  update(id: number, updateGetGoodDto: UpdateGetGoodDto) {
    return `This action updates a #${id} getGood`;
  }

  remove(id: number) {
    return `This action removes a #${id} getGood`;
  }
}
