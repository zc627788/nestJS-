import { DbModule } from './comments/db/db.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [CommentsModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
