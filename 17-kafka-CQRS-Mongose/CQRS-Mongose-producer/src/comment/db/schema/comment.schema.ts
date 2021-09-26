import { SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

// schema与数据库映射
export const CommentSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  phone: String,
});
