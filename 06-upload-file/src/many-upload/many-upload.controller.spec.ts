import { Test, TestingModule } from '@nestjs/testing';
import { ManyUploadController } from './many-upload.controller';

describe('ManyUploadController', () => {
  let controller: ManyUploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManyUploadController],
    }).compile();

    controller = module.get<ManyUploadController>(ManyUploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
