import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  getApi(): string {
    return 'Api接口访问成功';
  }
}
