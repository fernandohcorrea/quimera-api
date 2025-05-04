import { AccountService } from './account.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('account')
  async getHello(): Promise<any> {
    return [await this.accountService.getHello()];
  }
}
