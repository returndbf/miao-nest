import { Injectable } from '@nestjs/common';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mission } from './entities/mission.entity';
import { Repository } from 'typeorm';
var dayjs = require('dayjs')

@Injectable()
export class MissionService {
  constructor(
    @InjectRepository(Mission) private readonly mission: Repository<Mission>,
  ) {}

  create(createMissionDto: CreateMissionDto) {
    return 'This action adds a new mission';
  }

   findTodayMissions(today=dayjs().format('YYYY-MM-DD')) {
    return  this.mission.findBy({
      today,
    });
  }

  findAll() {
    return `This action returns all mission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mission`;
  }

  update(id: number, updateMissionDto: UpdateMissionDto) {
    return `This action updates a #${id} mission`;
  }

  remove(id: number) {
    return `This action removes a #${id} mission`;
  }
}
