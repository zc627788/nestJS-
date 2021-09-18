import { Length, IsNotEmpty } from 'class-validator';
export class User {
  @Length(11, 11, { message: '电话号码有误' })
  @IsNotEmpty({ message: '用户 不能为空' })
  readonly phone: string;

  @IsNotEmpty({ message: '密码 不能为空' })
  readonly password: string;
}
