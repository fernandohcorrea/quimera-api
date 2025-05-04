import { DataSourceOptions } from 'typeorm';
import * as path from 'node:path';

const vehve: DataSourceOptions = {
  name: 'vehve',
  type: 'mariadb',
  host: process.env.MARIADB_HOST || 'localhost',
  port: parseInt(process.env.MARIADB_PORT, 10) || 3306,
  username: process.env.DB_VEHVE_USER || '',
  password: process.env.DB_VEHVE_PASSWORD || '',
  database: process.env.DB_VEHVE_DATABASE || '',
  entities: [
    [
      path.join(__dirname, `../`, '/shared/databases/vehve/entities'),
      '**/*.entity.js',
    ].join(`/`),
  ],
  synchronize: false,
  migrations: {
    path: path.join(
      __dirname,
      `../`,
      '/shared/databases/vehve/migrations',
      '/*.js',
    ),
  },
  migrationsTableName: 'z_migrations',
};

export default {
  db_default: 'vehve',
  vehve,
};
