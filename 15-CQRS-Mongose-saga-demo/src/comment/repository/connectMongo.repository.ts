import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetConnectMongoQuery } from '../queries/interfaces';
import { CommentCurd } from '../crud/comment-Curd';

@Injectable()
export class ConnectMongo {
  constructor(
    private readonly commentCurd: CommentCurd,
  ) {}

  async findAll(username): Promise<any> {
    console.log(`3.Query:触发repository username值`, username);
    const campers = await this.commentCurd.get(username);
    return campers;
  }
}
