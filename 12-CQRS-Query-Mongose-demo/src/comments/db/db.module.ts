import { CommentSchema } from './schema/comment.schema';
import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const MONGO_MODULE = MongooseModule.forFeature([
  { name: 'COMMENT_MODULE', schema: CommentSchema, collection: 'comment' },
]);
@Global()
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    MONGO_MODULE,
  ],
  exports: [MONGO_MODULE],
})
export class DbModule {}
