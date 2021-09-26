import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ConnectMongo } from '../../repository/connectMongo.repository';
import { GetConnectMongoQuery } from '../interfaces';

@QueryHandler(GetConnectMongoQuery)
export class GetConnectMongoHandler implements IQueryHandler<GetConnectMongoQuery> {
  constructor(private readonly connectMongo: ConnectMongo) {}

  async execute({ GetPhone }): Promise<GetConnectMongoQuery[]> {
    console.log(`2.触发handlers的phone值`, GetPhone);

    return this.connectMongo.findAll(GetPhone);
  }
}
