import {
  Controller,
  Get,
  Render,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';

import { AnyFilesInterceptor } from '@nestjs/platform-express';

import { createWriteStream } from 'fs';

import { join } from 'path';
@Controller('many-upload')
export class ManyUploadController {
  @Get()
  @Render('uploadmany')
  index() {
    return false;
  }

  @Post('doAdd')
  @UseInterceptors(AnyFilesInterceptor())
  doAdd(@Body() body, @UploadedFiles() files) {
    console.log('body :>> ', body);
    console.log('files :>> ', files);
    for (const file of files) {
      const writeStream = createWriteStream(
        join(
          __dirname,
          '../../public/upload',
          `${Date.now()}-${file.originalname}`,
        ),
      );
      writeStream.write(file.buffer);
    }
    return '上传图片成功';
  }
}
