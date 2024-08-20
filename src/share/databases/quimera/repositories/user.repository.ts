import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from 'src/share/databases/quimera/entities/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  /**
   * Get Admin
   */
  async getAdmin() {
    return await this.findOne({
      where: {
        id: 1,
      },
    });
  }
}
