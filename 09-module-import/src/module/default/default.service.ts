import { Injectable } from '@nestjs/common';

@Injectable()
export class DefaultService {
  getDefault() {
    return '访问default成功';
  }
}
