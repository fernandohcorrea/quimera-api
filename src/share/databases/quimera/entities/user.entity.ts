import { Exclude } from 'class-transformer';
import { DateTime } from 'luxon';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ type: 'timestamp' })
  dt_last_login: DateTime;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: DateTime;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: DateTime;

  @Exclude()
  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: DateTime;
}
