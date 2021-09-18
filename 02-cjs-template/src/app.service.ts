import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { name: 'JackSon', age: '22' };
  }
}
