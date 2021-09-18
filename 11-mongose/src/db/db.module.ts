import { UserSchema } from './schema/user.schema';
import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const MONGO_MODULE = MongooseModule.forFeature([
  {
    name: 'USER_MODULE',
    schema: UserSchema,
    collection: 'user',
  },
]);
@Global()
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    MONGO_MODULE,
  ],
  exports: [MONGO_MODULE],
})
export class DbModule {}
