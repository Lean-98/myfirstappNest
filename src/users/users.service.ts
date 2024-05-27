import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany();
  }

  getUser(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  createUser(user: CreateUserDto) {
    return this.prisma.user.create({
      data: user,
    });
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
