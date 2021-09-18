import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetConnectMongoQuery } from '../queries/interfaces';

@Injectable()
export class ConnectMongo {
  constructor(
    @InjectModel('COMMENT_MODULE')
    private readonly commentModel: Model<GetConnectMongoQuery>,
  ) {}

  async findAll(phone): Promise<GetConnectMongoQuery[]> {
    console.log(`3.触发model phone值`, phone)
    const campers = await this.commentModel.find(phone);
    return campers;
  }
}
