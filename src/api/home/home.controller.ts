import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  async getHello(): Promise<any> {
    return await this.homeService.getHello();
  }

  @Get('/hola')
  async getHola(): Promise<any> {
    return await this.homeService.getHola();
  }
}
