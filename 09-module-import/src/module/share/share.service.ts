import { Injectable } from '@nestjs/common';

@Injectable()
export class ShareService {
  share() {
    return 'public export';
  }
}
