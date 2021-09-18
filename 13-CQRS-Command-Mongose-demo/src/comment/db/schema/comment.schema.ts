import { SchemaFactory } from '@nestjs/mongoose';
import { CommentAddedEvent } from '../../events/interfaces/comment-added.event';
import * as mongoose from 'mongoose';

// schema与数据库映射
export const CommentSchema = new mongoose.Schema({
  phone: String,
  username: String,
});
