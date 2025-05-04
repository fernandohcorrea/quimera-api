import { SharedModule } from '../shared/shared.module';
import { CfgModule } from './../_config/cfg.module';
import { AccountService } from './controllers/account/account.service';
import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home/home.controller';
import { HomeService } from './controllers/home/home.service';
import { AccountController } from './controllers/account/account.controller';

@Module({
  imports: [CfgModule, SharedModule],
  controllers: [AccountController, HomeController],
  providers: [AccountService, HomeService],
})
export class ApiModule {}
