import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ShareModule } from './share/share.module';

@Module({
  imports: [ApiModule, ShareModule],
})
export class MainModule {}
