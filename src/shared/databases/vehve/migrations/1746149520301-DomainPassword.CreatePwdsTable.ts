import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePwdsTable1746149520301 implements MigrationInterface {
  /**
   * Up
   *
   * @param   {QueryRunner<void>}  queryRunner
   * @return  {Promise<void>}
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pwds',
        columns: [
          {
            name: 'id_account',
            type: 'varchar(36)',
            isUnique: true,
            isPrimary: true,
          },
          {
            name: 'password_hash',
            type: 'varchar(200)',
            isNullable: false,
          },
          {
            name: 'hash_type',
            type: 'varchar(20)',
          },
          {
            name: 'hash_nonce',
            type: 'varchar(20)',
          },
          {
            name: 'created_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'deleted_at',
            type: 'datetime',
            isNullable: true,
          },
        ],
      }),
    );
  }

  /**
   * Down
   *
   * @param   {QueryRunner<void>}  queryRunner
   * @return  {Promise<void>}
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pwds');
  }
}
