import { UserRepository } from '../../share/databases/quimera/repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  constructor(private userRepository: UserRepository) {}

  async getHello(): Promise<any> {
    return await this.userRepository.find();
  }

  async getHola(): Promise<any> {
    return await this.userRepository.getAdmin();
  }
}
