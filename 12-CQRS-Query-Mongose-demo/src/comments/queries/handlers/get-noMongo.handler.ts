import { NoMongo } from "./../../repository/noMongo.repository";
import { GetNoMongoQuery } from "../interfaces";
import { IQueryHandler,QueryHandler } from "@nestjs/cqrs";

@QueryHandler(GetNoMongoQuery)
export class getNoMongoHandler implements IQueryHandler<GetNoMongoQuery, NoMongo> {
    async execute(query: GetNoMongoQuery){
        return new NoMongo('10000','jackson')
    }
}