import { getNoMongoHandler } from './get-noMongo.handler';
import { GetConnectMongoHandler } from './get-connectMongo.handler';
export const QueryHandlers = [ GetConnectMongoHandler,getNoMongoHandler];
