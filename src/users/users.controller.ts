import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  // Inyección de dependencias
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers(@Query() query: any) {
    // console.log(query);
    return this.usersService.getUsers();
  }

  @Get('/:id')
  getUserById(@Param('id') id: string) {
    const userFound = this.usersService.getUser(parseInt(id));

    if (!userFound) {
      return new NotFoundException(`User with id ${id} not found`);
    }

    return userFound;
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @Put('')
  updateUser() {
    return this.usersService.updateStatusUser();
  }

  @Patch()
  updateStatusUser(@Body() user: UpdateUserDto) {
    const userUpdated = this.usersService.updateStatusUser();

    if (!userUpdated) {
      return new NotFoundException(`User with id not found`);
    }

    return userUpdated;
  }

  @Delete('')
  deleteUserById() {
    return this.usersService.deletedUser();
  }
}
