import { Test } from '@nestjs/testing';
import { UserRepository } from 'src/share/databases/quimera/repositories/user.repository';
import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

describe('UserRepository', () => {
  let mockRepositoryUser: UserRepository;
  const dataSource = {
    createEntityManager: jest.fn(),
  };

  beforeEach(async () => {
    const modRef = await Test.createTestingModule({
      providers: [
        UserRepository,
        {
          provide: DataSource,
          useValue: dataSource,
        },
      ],
    }).compile();

    mockRepositoryUser = modRef.get<UserRepository>(UserRepository);
  });

  describe('getHola', () => {
    it('should return Data', async () => {
      const user = {
        id: 1,
        name: 'Fernando',
        email: 'fernando@test.com',
        password: 'asdasdasd',
        dt_last_login: null,
        deleted_at: null,
      };

      const findOneSpy = jest
        .spyOn(mockRepositoryUser, 'getAdmin')
        .mockResolvedValue(user as User);

      const foundUser = await mockRepositoryUser.getAdmin();

      expect(foundUser).toEqual(user);
      expect(findOneSpy).toHaveBeenCalledWith();
    });
  });
});
