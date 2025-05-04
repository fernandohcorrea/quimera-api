import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { User } from '../../databases/vehve/entities/user.entity';
// import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  // constructor(
  //   @InjectRepository(User)
  //   private usersRepository: Repository<User>,
  // ) {}

  async getHello(): Promise<any> {
    const result = await Promise.resolve([{ oie: 123 }]);
    return result;
  }
}
