import { Injectable } from '@nestjs/common';
@Injectable()
export class UserService {
  findAll() {
    return [
      { title: '用户11111' },
      { title: '用户2222' },
      { title: '用户3333' },
      { title: '用户4444' },
      { title: '用户55555' },
    ];
  }
}
