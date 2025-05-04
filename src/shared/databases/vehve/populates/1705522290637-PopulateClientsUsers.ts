// import { QueryRunner } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PopulateClientsUsers1705522290637 {
  /**
   * Run
   *
   * @param   {QueryRunner}  queryRunner
   *
   * @return  {Promise<void>}
   */
  public async run() // queryRunner: QueryRunner,
  // populate_factor: number,
  : Promise<void> {
    // const count_clients = await dataTable.countDataTable(
    //   queryRunner,
    //   'clients',
    // );
    // if (count_clients >= populate_factor) {
    //   return;
    // }
    // const qtd_populate = populate_factor - count_clients;
    // const user_admin = await users.getAdmin(queryRunner);
    // if (!user_admin) throw new Error(`Admin not found!`);
    // const query_client = getQueryInsertClient();
    // const query_user = getQueryInsertUser();
    // for (let i = 0; i < qtd_populate; i++) {
    //   const name = faker.company.name();
    //   const suffix = dataTable.randomData(['SA', 'LTDA', 'ME', 'MEI']);
    //   const corporate_name = name + ` .${suffix}`;
    //   const cnpj = strings.genCnpj();
    //   let domain = name.split(' ').join('');
    //   domain = slugify(domain, { lower: true });
    //   const tld = dataTable.randomData(['.com', '.com.br']);
    //   domain = `${domain}${tld}`;
    //   const result_client = await queryRunner.query(query_client, [
    //     user_admin.id,
    //     name,
    //     corporate_name,
    //     cnpj,
    //   ]);
    //   const client_id = result_client.insertId;
    //   for (const user_tpl of usersList) {
    //     const cpf = genCpf();
    //     let password = await getDefaultPassword();
    //     const name_tmp = faker.person.fullName();
    //     const nickname = name_tmp.split(' ')[0];
    //     const mobile_number = '119' + faker.string.numeric({ length: 8 });
    //     if (user_tpl.password) {
    //       password = await genHashPassword(user_tpl.password);
    //     }
    //     const email_name = user_tpl.email.split('@')[0];
    //     const email = `${email_name}@${domain}`;
    //     const user_data = [
    //       name_tmp,
    //       nickname,
    //       email,
    //       cpf,
    //       password,
    //       mobile_number,
    //       user_tpl.role_id,
    //     ];
    //     const result_user = await queryRunner.query(query_user, user_data);
    //     const user_id = result_user.insertId;
    //     const roles_test = [
    //       RolesIdConstants.AGENT_ID,
    //       RolesIdConstants.MANAGER_ID,
    //     ];
    //     if (roles_test.includes(user_tpl.role_id)) {
    //       await queryRunner.query(
    //         `INSERT INTO clients_users (client_id, user_id) VALUES (?, ?)`,
    //         [client_id, user_id],
    //       );
    //     }
    //   }
    // }
  }
}
