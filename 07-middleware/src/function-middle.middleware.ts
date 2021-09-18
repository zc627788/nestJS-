//函数式中间件
export function functionMiddle(req, res, next) {
  console.log(`函数式中间件...`);
  next();
}
