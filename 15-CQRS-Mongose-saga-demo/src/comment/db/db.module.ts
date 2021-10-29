import { CommentSchema } from './schema/comment.schema';
import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const url = process.env.MONGO_URL || 'localhost';
console.log(`url`, url);
// 创建mongo实例
const MONGO_MODULE = MongooseModule.forFeature([
  { name: 'COMMENT_MODULE', schema: CommentSchema, collection: 'comment' },
]);

@Global()
@Module({
  // 连接mongo
  imports: [
    MongooseModule.forRoot(`mongodb://root:pass12345@${url}:27017/admin`),
    MONGO_MODULE,
  ],
  exports: [MONGO_MODULE],
})
export class DbModule {}
