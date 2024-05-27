import {
  Module,
  RequestMethod,
  type MiddlewareConsumer,
  type NestModule,
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Aca lo configuro para todo el módulo de usuarios
    // consumer.apply(LoggerMiddleware).forRoutes('users');
    // Pero también se puede llamar al middleware solo en rutas especificas
    // consumer
    //   .apply(LoggerMiddleware) // Sirve para registrar las peticiones que van llegando
    //   .forRoutes(
    //     {
    //       path: '/users',
    //       method: RequestMethod.GET,
    //     },
    //     {
    //       path: '/users',
    //       method: RequestMethod.POST,
    //     },
    //   )
    //   .apply(AuthMiddleware) // Sirve para autenticar el user
    //   .forRoutes('users');
  }
}
