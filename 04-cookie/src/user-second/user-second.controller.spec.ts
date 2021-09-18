import { Test, TestingModule } from '@nestjs/testing';
import { UserSecondController } from './user-second.controller';

describe('UserSecondController', () => {
  let controller: UserSecondController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserSecondController],
    }).compile();

    controller = module.get<UserSecondController>(UserSecondController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
