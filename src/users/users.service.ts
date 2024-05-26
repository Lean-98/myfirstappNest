import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);
    return {
      ...user,
      id: this.users.length + 1,
    };
  }

  updateUser(user: UpdateUserDto) {
    console.log(user);
    return user;
  }

  deletedUser() {
    return 'Deleted user by id';
  }

  updateStatusUser() {
    return 'Updated status user';
  }
}
