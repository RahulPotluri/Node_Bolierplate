import { ExpressMiddlewareInterface } from 'routing-controllers';

export class LoggerMiddleware implements ExpressMiddlewareInterface {
  // interface implementation is optional

  use(request: any, response: any, next?: (err?: any) => any): any {
    console.log('do something...');
    next();
  }
}