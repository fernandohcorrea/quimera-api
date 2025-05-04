import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateAccountsTable1746147948621 implements MigrationInterface {
  /**
   * Up
   *
   * @param   {QueryRunner<void>}  queryRunner
   * @return  {Promise<void>}
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'accounts',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'id_status',
            type: 'int(5)',
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

    await queryRunner.createForeignKey(
      'accounts',
      new TableForeignKey({
        name: 'account_account_status_fk',
        columnNames: ['id_status'],
        referencedColumnNames: ['id'],
        referencedTableName: 'accounts_status',
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
    await queryRunner.dropForeignKey('accounts', 'account_account_status_fk');
    await queryRunner.dropTable('accounts');
  }
}
