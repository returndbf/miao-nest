import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GetGoodsService } from './get-goods.service';
import { CreateGetGoodDto } from './dto/create-get-good.dto';
import { UpdateGetGoodDto } from './dto/update-get-good.dto';
import { BaseController } from "../BaseController";

@Controller('getGoods')
export class GetGoodsController extends BaseController {
  constructor(private readonly getGoodsService: GetGoodsService) {
    super();
  }

  @Post()
  create(@Body() createGetGoodDto: CreateGetGoodDto) {
    return this.getGoodsService.create(createGetGoodDto);
  }

  @Get('queryGetGoods')
  findAll() {
    return this.getGoodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getGoodsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGetGoodDto: UpdateGetGoodDto) {
    return this.getGoodsService.update(+id, updateGetGoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.getGoodsService.remove(+id);
  }
}
