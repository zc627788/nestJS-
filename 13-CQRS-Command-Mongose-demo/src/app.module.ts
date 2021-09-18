import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { DbModule } from './comment/db/db.module';
@Module({
  imports: [CommentModule,DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
