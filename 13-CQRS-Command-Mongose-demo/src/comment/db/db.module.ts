import { CommentSchema } from './schema/comment.schema';
import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 创建mongo实例
const MONGO_MODULE = MongooseModule.forFeature([
  { name: 'COMMENT_MODULE', schema: CommentSchema, collection: 'comment' },
]);

@Global()

@Module({
  // 连接mongo
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    MONGO_MODULE,
  ],
  exports: [MONGO_MODULE],
})
export class DbModule {}
