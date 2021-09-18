import {
  ArgumentMetadata,
  PipeTransform,
  Injectable,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class UserPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;

    // 如果参数不是 类 而是普通的 JavaScript 对象则不进行验证
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    // 通过元数据和对象实例，去构建原有类型
    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      // 获取到第一个没有通过验证的错误对象
      const error = errors.shift();
      const constraints = error.constraints;

      // 将未通过验证的字段的错误信息和状态码，以ApiException的形式抛给我们的全局异常过滤器
      for (const key in constraints) {
        throw new HttpException(
          {
            error: constraints[key],
          },
          HttpStatus.FORBIDDEN,
        );
      }
    }

    return value;
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type);
  }
}
