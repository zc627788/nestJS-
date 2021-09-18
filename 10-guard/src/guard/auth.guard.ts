import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
// 守卫是一个使用 @Injectable() 装饰器的类。 守卫应该实现 CanActivate 接口。
// 在 Nextjs 中如果我们想做权限判断的话可以在守卫中完成，也可以在中间件中完成
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    //   准确的获取到对应路由
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const n = Math.random();
    // console.log('守卫执行了 :>> ', '守卫执行了' + n);
    // if (n > 0.5) {
    //   return true;
    // }
    const req = context.switchToHttp().getRequest();
    if (req.path == '/login') {
      return true;
    } else {
      const userinfo = context.switchToHttp().getRequest().session.username;
      console.log('userinfo :>> ', userinfo);
      if (userinfo) {
        return true;
      }
      return false;
    }
  }
}
