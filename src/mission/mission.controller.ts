import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MissionService } from './mission.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { BaseController } from "../BaseController";

@Controller('mission')
export class MissionController extends BaseController{
  constructor(private readonly missionService: MissionService) {
    super()
  }

  @Post()
  create(@Body() createMissionDto: CreateMissionDto) {
    return this.missionService.create(createMissionDto);
  }
  @Get('getDayMissions')
  findTodayMissions(@Query('date') today: string) {
    return this.missionService.findTodayMissions(today);
  }

  @Get()
  findAll() {
    return this.missionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.missionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMissionDto: UpdateMissionDto) {
    return this.missionService.update(+id, updateMissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.missionService.remove(+id);
  }
}
