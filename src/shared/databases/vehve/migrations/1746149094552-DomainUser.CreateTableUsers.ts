import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUsers1746149094552 implements MigrationInterface {
  /**
   * Up
   *
   * @param   {QueryRunner}  queryRunner
   * @return  {Promise<void>}
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id_account',
            type: 'varchar(36)',
            isUnique: true,
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar(200)',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar(200)',
            isUnique: true,
          },
          {
            name: 'dt_birth',
            type: 'date',
            isNullable: false,
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
   * @param   {QueryRunner}  queryRunner
   * @return  {Promise<void>}
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
