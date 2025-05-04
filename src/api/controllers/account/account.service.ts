import { Injectable } from '@nestjs/common';
import { ProfileService } from '../../../shared/domains/profile/profile.service';

@Injectable()
export class AccountService {
  constructor(private readonly profileService: ProfileService) {}

  async getHello(): Promise<any> {
    return await this.profileService.getHello();
  }
}
