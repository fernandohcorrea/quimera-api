import { HomeService } from './home.service';
import { MockType } from './../../../dist/share/databases/util/mocks.d';
import { Test } from '@nestjs/testing';
import { UserRepository } from 'src/share/databases/quimera/repositories/user.repository';
import { HomeController } from './home.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RepositoryMockUserFactory } from 'src/share/databases/util/mocks';

describe('HomeController', () => {
  let mockRepositoryUser: MockType<UserRepository>;
  let homeController: HomeController;

  beforeEach(async () => {
    const modRef = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [
        HomeService,
        {
          provide: UserRepository,
          useFactory: RepositoryMockUserFactory,
        },
      ],
    }).compile();

    mockRepositoryUser = modRef.get(getRepositoryToken(UserRepository));
    homeController = modRef.get<HomeController>(HomeController);
  });

  describe('getHello', () => {
    it('should return Data', async () => {
      const user = {
        id: 1,
        name: 'Fernando',
        email: 'fernando@test.com',
        password: 'asdasdasd',
        dt_last_login: null,
        deleted_at: null,
      };

      mockRepositoryUser.find.mockReturnValue([user]);
      expect(await homeController.getHello()).toEqual([user]);
      expect(mockRepositoryUser.find).toHaveBeenCalledWith();
    });
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

      mockRepositoryUser.getAdmin.mockReturnValue(user);
      expect(await homeController.getHola()).toEqual(user);
      expect(mockRepositoryUser.getAdmin).toHaveBeenCalledWith();
    });
  });
});
