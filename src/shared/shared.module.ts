import { DatabasesModule } from './databases/databases.module';
import { Module } from '@nestjs/common';
import { ProfileModule } from './domains/profile/profile.module';

@Module({
  imports: [DatabasesModule, ProfileModule],
  exports: [DatabasesModule, ProfileModule],
})
export class SharedModule {}
