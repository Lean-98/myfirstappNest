import {
  Body,
  Controller,
  Delete,
  Get,
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
import { UserParams } from './dto/user-params';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  // Inyección de dependencias
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllUsers(@Query() query: any) {
    // console.log(query);
    return this.usersService.getUsers();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get user by ID' })
  getUserById(@Param() params: UserParams) {
    // const userFound = this.usersService.getUser(parseInt(id));
    const userFound = this.usersService.getUser(params.id);
    if (!userFound) {
      throw new NotFoundException(`User with id ${params.id} not found`);
    }

    return userFound;
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
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
