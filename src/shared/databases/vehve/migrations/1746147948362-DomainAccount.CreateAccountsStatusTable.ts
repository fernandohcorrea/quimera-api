import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { SeedAccountStatus1746147948362 as SeedAccountStatus } from '../seeders/1746147948362-SeedAccountStatus.domain-account';

export class CreateAccountsStatusTable1746147948362
  implements MigrationInterface
{
  /**
   * Up
   *
   * @param   {QueryRunner<void>}  queryRunner
   * @return  {Promise<void>}
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'accounts_status',
        columns: [
          {
            name: 'id',
            type: 'int(5)',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar(100)',
          },
          {
            name: 'tr_name_slug',
            type: 'varchar(100)',
          },
        ],
      }),
    );

    const seed = new SeedAccountStatus();
    await seed.up(queryRunner);
  }

  /**
   * Down
   *
   * @param   {QueryRunner<void>}  queryRunner
   * @return  {Promise<void>}
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    const seed = new SeedAccountStatus();
    await seed.down(queryRunner);
    await queryRunner.dropTable('accounts_status');
  }
}
