import * as path from 'node:path';
import * as fs from 'fs/promises';
import { SeedAccountStatus1746147948362 } from './seeders/1746147948362-SeedAccountStatus.domain-account';

const preProviders = [
  {
    provide: 'SeedAccountStatus1746147948362',
    useClass: SeedAccountStatus1746147948362,
  },
];

export const seedersProviders = [
  ...preProviders,
  {
    provide: 'LIST_SEEDERS',
    useFactory: async () => {
      const files = await fs.readdir(path.join(__dirname, '/seeders'));
      const listOut = [];

      for (const file of files) {
        if (!file.endsWith('.js')) {
          continue;
        }

        const regex =
          /^(?<time>[0-9]{1,})-(?<name>.{1,}).*\.(?<domain>.{1,})\.(?<ext>js)$/g;
        const ereg = regex.exec(file);

        if (!ereg) {
          continue;
        }

        const className = `${ereg.groups.name}${ereg.groups.time}`;

        preProviders.map((item) => {
          if (item.provide === className) {
            listOut.push(item);
            return item;
          }
        });
      }

      return listOut;
    },
  },
];
