import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../dtos/user.dto';
import { Model } from 'mongoose';
@Injectable()
export class UserService {
  constructor(
    @InjectModel('USER_MODULE') private readonly userModel: Model<User>,
  ) {}
  public regist(user: User) {
    console.log(`User`, user);
    if (user.password && user.phone) {
      return this.userModel
        .find({phone: user.phone,})
        .then((res) => {
          if (res.length !== 0) {
            console.log(`该用户已经注册`);
            throw Error('用户已注册');
          }
        })
        .then(() => {
          try {
            const createUser = new this.userModel(user);
            createUser.save();
            return `${user.phone}注册成功`;
          } catch (error) {
            throw Error('保存用户失败' + error);
          }
        })
    }
  }
}
