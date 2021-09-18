import { SchemaFactory } from '@nestjs/mongoose';
import { GetConnectMongoQuery } from '../../queries/interfaces';

export const CommentSchema = SchemaFactory.createForClass(GetConnectMongoQuery);
