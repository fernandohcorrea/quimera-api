import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './quimera/entities/user.entity';
import { dataSource } from './quimera/quimera.datasource';
import { DatabaseProviders } from './datasource.providers';
import { UserRepository } from './quimera/repositories/user.repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'default',
      useFactory: async (
        configService: ConfigService,
      ): Promise<TypeOrmModuleOptions> => {
        return configService.get('databases.quimera');
      },
      dataSourceFactory: async () => {
        return await dataSource.initialize();
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [...DatabaseProviders, UserRepository],
  exports: [TypeOrmModule, UserRepository],
})
export class DatabasesModule {}
