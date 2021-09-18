import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value :>> ', value);
    console.log('我是管道');
    value.id = '666666';
    return value;
  }
}
