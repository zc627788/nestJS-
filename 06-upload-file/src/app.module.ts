import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadController } from './upload/upload.controller';
import { ManyUploadController } from './many-upload/many-upload.controller';

@Module({
  imports: [],
  controllers: [AppController, UploadController, ManyUploadController],
  providers: [AppService],
})
export class AppModule {}
