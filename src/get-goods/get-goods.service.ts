import { Injectable } from '@nestjs/common';
import { CreateGetGoodDto } from './dto/create-get-good.dto';
import { UpdateGetGoodDto } from './dto/update-get-good.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GetGoods } from './entities/get-good.entity';
import { Repository } from 'typeorm';
import { BaseController } from '../BaseController';

const Service = Injectable;
@Service()
export class GetGoodsService{

  constructor(
    @InjectRepository(GetGoods) private readonly getGoods: Repository<GetGoods>,
  ) {}
  create(createGetGoodDto: CreateGetGoodDto) {
    return 'This action adds a new getGood';
  }

  findAll() {
    return this.getGoods.find();
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
