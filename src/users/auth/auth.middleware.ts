import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import type { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED);
    }

    if (authorization !== 'xzy123') {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    next();
  }
}
