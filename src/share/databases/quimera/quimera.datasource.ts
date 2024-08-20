import { DataSource } from 'typeorm';
import databases from 'src/_config/databases';

export const dataSource = new DataSource(databases['quimera']);
