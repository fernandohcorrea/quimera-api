import { QueryRunner } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ACCOUNT_STATUS_LIST } from '../constants/accounts-status.domain-accounts';
import { countDataTable } from '../../utils/data';

@Injectable()
export class SeedAccountStatus1746147948362 {
  /**
   * Up
   *
   * @param   {QueryRunner}  queryRunner
   *
   * @return  {Promise<void>}
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    const count = await countDataTable(queryRunner, 'accounts_status');

    if (count > 0) {
      return;
    }

    const data = ACCOUNT_STATUS_LIST.map((accountStatus) => {
      return `(${accountStatus.id}, '${accountStatus.name}', '${accountStatus.tr_name_slug}')`;
    });

    const query = `INSERT INTO accounts_status (id, name, tr_name_slug) VALUES ${data.join(
      ',',
    )}`;

    await queryRunner.query(query);
  }

  /**
   * Down
   *
   * @param   {QueryRunner}  queryRunner
   *
   * @return  {Promise<void>}
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    const ids = ACCOUNT_STATUS_LIST.map((accountStatus) => accountStatus.id);
    const query = `DELETE FROM accounts_status WHERE id IN (${ids.join(',')})`;
    await queryRunner.query(query);
  }
}
