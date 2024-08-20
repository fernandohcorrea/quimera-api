import { DatabasesModule } from './databases/databases.module';
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configModuleOptions from 'src/_config/config-options';

@Global()
@Module({
  imports: [ConfigModule.forRoot(configModuleOptions), DatabasesModule],
  exports: [DatabasesModule],
})
export class ShareModule {}
