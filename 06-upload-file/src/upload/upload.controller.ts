import {
  Controller,
  Get,
  Render,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';

@Controller('upload')
export class UploadController {
  @Get()
  @Render('upload')
  index() {
    return false;
  }
  @Post('doAdd')
  @UseInterceptors(FileInterceptor('pic'))
  doAdd(@Body() body, @UploadedFile() file) {
    console.log('body :>> ', body);
    console.log('file :>> ', file); //上传图片的信息  必须在form的属性里面配置enctype="multipart/form-data"
    console.log('__dirname :>> ', __dirname);

    const writeStream = createWriteStream(
      join(
        __dirname,
        '../../public/upload',
        `${Date.now()}-${file.originalname}`,
      ),
    );
    writeStream.write(file.buffer);
    return '上传图片成功';
  }
}
