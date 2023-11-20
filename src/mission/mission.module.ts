import { Module } from '@nestjs/common';
import { MissionService } from './mission.service';
import { MissionController } from './mission.controller';
import { Mission } from './entities/mission.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Mission])],
  controllers: [MissionController],
  providers: [MissionService],
})
export class MissionModule {}
