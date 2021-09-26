import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
export class Comment {
  username?: string;
  phone?: string;
}

@Injectable()
export class CommentCurd {
  public constructor(
    @InjectModel('COMMENT_MODULE')
    private commentCurd: Model<Comment>,
  ) {}

  //  query
  public async get(username: Comment) {
    console.log('4.查询username值');
    return await this.commentCurd.find(username);
  }
  
  //  add
  public async create(productEntity: Comment) {
    console.log('3.创建用户');
    try {
      const product = new this.commentCurd(productEntity).save();
      return product;
    } catch (e) {
      return new Error(e);
    }
  }

  //  delete
  public async remove(Comment: Comment) {
    console.log('3.删除用户');
    try {
      const product = await this.commentCurd.findOne(Comment);
      await this.commentCurd.deleteOne(Comment);
      return product;
    } catch (e) {
      return new Error(e);
    }
  }

  //  updata
  public async update(Comment: Comment) {
    console.log(`3.更新用户`);
    try {
      const account = await this.commentCurd.findOne({
        username: Comment.username,
      });
        console.log('account', account)
      //   判断用户是否存在
      if (account) {
         const a =  await this.commentCurd.updateOne(
          { username: Comment.username },
          { $set: { phone: Comment.phone } },
        );
        console.log('a', a)
        return a
      }
      return '用户未存在';
    } catch (e) {
      return new Error(e);
    }
  }
}
