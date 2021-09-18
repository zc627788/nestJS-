import { QueryHandlers } from './queries/handlers';

import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { ConnectMongo } from './repository/connectMongo.repository';

@Module({
  imports: [CqrsModule],
  controllers: [CommentsController],
  providers: [...QueryHandlers, ConnectMongo,],
})
export class CommentsModule {}









