import { Controller, Get } from '@nestjs/common';
import { DefaultService } from './default.service';
import { ShareService } from '../share/share.service';

@Controller('default')
export class DefaultController {
  constructor(
    private defaultService: DefaultService,
    private shareService: ShareService,
  ) {}
  @Get()
  index() {
    return 'dafault';
  }
  @Get('go')
  go() {
    return this.defaultService.getDefault();
  }
  @Get('share')
  share() {
    return this.shareService.share();
  }
}
