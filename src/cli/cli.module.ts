import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { CfgModule } from 'src/_config/cfg.module';
import { SeedCommand } from './commands/seed.command';
import { cliProviders } from './cli.providers';
import { SharedModule } from 'src/shared/shared.module';
import { seedersProviders } from 'src/shared/databases/vehve/seeders.providers';

@Module({
  imports: [CfgModule, SharedModule, CommandModule],
  providers: [...cliProviders, ...seedersProviders, SeedCommand],
})
export class CliModule {}
