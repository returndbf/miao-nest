import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MissionModule } from './mission/mission.module';
import { GetGoodsModule } from './get-goods/get-goods.module';
import { StoreModule } from './store/store.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    MissionModule,
    GetGoodsModule,
    StoreModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: 'qxf990919',
      host: '117.50.184.140',
      database: 'miaomiao',
      port: 3306,
     // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      retryDelay: 500,
      retryAttempts: 10,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
