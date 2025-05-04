import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'pwds' })
export class Pwd {
  @PrimaryColumn('uuid')
  id: string;

  @Exclude()
  @Column()
  password_hash: string;

  @Column()
  hash_type: string;

  @Column()
  hash_nonce: string;

  @CreateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP()',
  })
  created_at: Date;

  @Exclude()
  @UpdateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP()',
    onUpdate: 'CURRENT_TIMESTAMP()',
  })
  updated_at: Date;
}

// @Exclude()
// @DeleteDateColumn({ type: 'datetime' })
// deleted_at?: Date;
