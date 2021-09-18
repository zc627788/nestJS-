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

  async findAll(phone): Promise<any> {
    console.log(`3.触发repository phone值`, phone);
    const campers = await this.commentCurd.get(phone);
    return campers;
  }
}
