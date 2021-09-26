import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { DbModule } from './comment/db/db.module';
@Module({
  imports: [CommentModule,DbModule],
})
export class AppModule {}
