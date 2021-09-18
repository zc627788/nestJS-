import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ConnectMongo } from '../../repository/connectMongo.repository';
import { GetConnectMongoQuery } from '../interfaces';

@QueryHandler(GetConnectMongoQuery)
export class GetConnectMongoHandler implements IQueryHandler<GetConnectMongoQuery> {
  constructor(private readonly connectMongo: ConnectMongo) {}

  async execute({ GetUsername }): Promise<GetConnectMongoQuery[]> {
    console.log(`2.Query:触发handlers的phone值`, GetUsername);

    return this.connectMongo.findAll(GetUsername);
  }
}
