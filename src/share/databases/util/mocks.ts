import { Repository } from 'typeorm';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<any>;
};

export const RepositoryMockUserFactory = jest.fn(() =>
  Object.assign(
    {
      getAdmin: jest.fn((entity) => entity),
    },
    repositoryDefaultMethods,
  ),
);

export const RepositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => repositoryDefaultMethods,
);

const repositoryDefaultMethods = {
  createQueryBuilder: jest.fn((entity) => entity),
  hasId: jest.fn((entity) => entity),
  getId: jest.fn((entity) => entity),
  create: jest.fn((entity) => entity),
  merge: jest.fn((entity) => entity),
  preload: jest.fn((entity) => entity),
  save: jest.fn((entity) => entity),
  remove: jest.fn((entity) => entity),
  softRemove: jest.fn((entity) => entity),
  recover: jest.fn((entity) => entity),
  insert: jest.fn((entity) => entity),
  update: jest.fn((entity) => entity),
  upsert: jest.fn((entity) => entity),
  delete: jest.fn((entity) => entity),
  softDelete: jest.fn((entity) => entity),
  restore: jest.fn((entity) => entity),
  exist: jest.fn((entity) => entity),
  exists: jest.fn((entity) => entity),
  existsBy: jest.fn((entity) => entity),
  count: jest.fn((entity) => entity),
  countBy: jest.fn((entity) => entity),
  sum: jest.fn((entity) => entity),
  average: jest.fn((entity) => entity),
  minimum: jest.fn((entity) => entity),
  maximum: jest.fn((entity) => entity),
  findOne: jest.fn((entity) => entity),
  find: jest.fn((entity) => entity),
  findBy: jest.fn((entity) => entity),
  findAndCount: jest.fn((entity) => entity),
  findAndCountBy: jest.fn((entity) => entity),
  findByIds: jest.fn((entity) => entity),
  findOneBy: jest.fn((entity) => entity),
  findOneById: jest.fn((entity) => entity),
  findOneOrFail: jest.fn((entity) => entity),
  findOneByOrFail: jest.fn((entity) => entity),
  query: jest.fn((entity) => entity),
  clear: jest.fn((entity) => entity),
  increment: jest.fn((entity) => entity),
  decrement: jest.fn((entity) => entity),
  extend: jest.fn((entity) => entity),
};
