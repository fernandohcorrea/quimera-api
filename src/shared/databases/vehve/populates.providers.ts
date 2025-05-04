import * as path from 'path';
import * as fs from 'fs/promises';
import { PopulateClientsUsers1705522290637 } from './populates/1705522290637-PopulateClientsUsers';

const preProviders = [
  {
    provide: 'PopulateClientsUsers1705522290637',
    useClass: PopulateClientsUsers1705522290637,
  },
];

export const populateProviders = [
  ...preProviders,
  {
    provide: 'LIST_POPULATE',
    useFactory: async () => {
      const files = await fs.readdir(path.join(__dirname, '/populates'));
      const listOut = [];

      for (const file of files) {
        if (!file.endsWith('.js')) {
          continue;
        }

        const regex = /^(?<time>[0-9]{1,})-(?<name>.{1,})(?<ext>.js)$/g;
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
