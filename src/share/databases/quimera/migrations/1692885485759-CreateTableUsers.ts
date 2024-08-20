import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUsers1692885485759 implements MigrationInterface {
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
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar(180)',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar(200)',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar(200)',
          },
          {
            name: 'dt_last_login',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
  }

  /**
   * Down
   *
   * @param   {QueryRunner}  queryRunners
   * @return  {Promise<void>}
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
