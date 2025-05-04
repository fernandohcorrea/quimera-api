import { seedersProviders } from './vehve/seeders.providers';
import { Module } from '@nestjs/common';
import { DatabaseProviders } from './databases.providers';
import { ConfigModule } from '@nestjs/config';
import { DataSourcesService } from './datasources.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useFactory: (dataSourcesService: DataSourcesService) => {
        return dataSourcesService.getDataSourceConfig();
      },
      imports: [DatabasesModule],
      inject: [DataSourcesService],
    }),
  ],
  providers: [DataSourcesService, ...DatabaseProviders, ...seedersProviders],
  exports: [DataSourcesService, ...DatabaseProviders, ...seedersProviders],
})
export class DatabasesModule {}
