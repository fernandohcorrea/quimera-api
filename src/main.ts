import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const main = await NestFactory.create(MainModule);

  const config = main.get(ConfigService);
  const api_port = config.get('port');

  await main.listen(api_port);
}
bootstrap();
