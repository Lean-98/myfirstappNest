import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class HelloController {
  // Response
  @Get('/hello')
  @ApiTags('hello')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({ message: 'Hello world!' });
  }

  // Request Body - No Errrors

  // Examples Http status errors

  @ApiTags('hello')
  @Get('new')
  @HttpCode(201)
  somethingNew() {
    return 'Something new';
  }

  @ApiTags('hello')
  @Get('notfound')
  @HttpCode(404)
  notFoundPage() {
    return '404 not found';
  }

  @ApiTags('hello')
  @Get('error')
  @HttpCode(500)
  errorPage() {
    return 'Error Route!';
  }

  @ApiTags('hello')
  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    // console.log(typeof num);
    return num + 14;
  }

  @ApiTags('hello')
  @Get('active/:status')
  isHelloActive(@Param('status', ParseBoolPipe) status: boolean) {
    console.log(typeof status);
    return status;
  }

  // Pipes Personalizado
  @ApiTags('hello')
  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateUserPipe) query: { name: string; age: number }) {
    // console.log(typeof query.name);
    // console.log(typeof query.age);
    return `Hello ${query.name}, you are ${query.age} years old`;
  }
}
