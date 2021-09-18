import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';
@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}
  @Get()
  index() {
    return 'Api';
  }
  @Get('go')
  go() {
    return this.apiService.getApi();
  }
}
