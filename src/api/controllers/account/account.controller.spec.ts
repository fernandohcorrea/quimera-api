import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { ProfileService } from '../../../shared/domains/profile/profile.service';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';

const moduleMocker = new ModuleMocker(global);

describe('ApiController', () => {
  let accountController: AccountController;

  const getHelloResult = {
    id: 1,
    name: 'Admin',
    email: 'admin@test.com',
    password: '1q2w3e4r!',
    created_at: '2025-04-27T03:00:14.000Z',
    updated_at: '2025-04-27T03:00:14.000Z',
    deleted_at: null,
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [AccountService],
    })
      .useMocker((token) => {
        if (token === ProfileService) {
          return { getHello: jest.fn().mockResolvedValue(getHelloResult) };
        }

        if (typeof token === 'function') {
          const mockMetadata = moduleMocker.getMetadata(
            token,
          ) as MockFunctionMetadata<any, any>;
          const Mock = moduleMocker.generateFromMetadata(mockMetadata);
          return new Mock();
        }
      })
      .compile();

    accountController = app.get<AccountController>(AccountController);
  });

  describe('root', () => {
    it('should return "Hello from Profile Service!"', async () => {
      const result = await accountController.getHello();
      expect(result).toBe(getHelloResult);
    });
  });
});
