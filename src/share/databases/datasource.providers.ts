import { dataSource } from './quimera/quimera.datasource';

export const DatabaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return await dataSource.initialize();
    },
  },
];
