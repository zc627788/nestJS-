import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser() {
    return '用户访问成功';
  }
}
