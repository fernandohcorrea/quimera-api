import { HomeService } from './home.service';
import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';

@Module({
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
