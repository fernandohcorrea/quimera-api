import { DataSourceOptions } from 'typeorm';
import * as path from 'path';

const quimera: DataSourceOptions = {
  name: 'quimera',
  type: 'mariadb',
  host: process.env.MARIADB_HOST || 'localhost',
  port: parseInt(process.env.MARIADB_PORT, 10) || 3306,
  username: process.env.MARIADB_USER || '',
  password: process.env.MARIADB_PASSWORD || '',
  database: process.env.MARIADB_DATABASE || '',
  entities: [
    [
      path.join(__dirname, `../`, '/share/databases/quimera/entities'),
      '**/*.entity.js',
    ].join(`/`),
  ],
  synchronize: false,
  migrations: {
    path: path.join(
      __dirname,
      `../`,
      '/share/databases/quimera/migrations',
      '/*.js',
    ),
  },
  migrationsTableName: 'z_migrations',
};

export default {
  db_default: 'quimera',
  quimera,
};
