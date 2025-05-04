import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../databases/vehve/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
