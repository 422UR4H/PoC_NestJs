import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from './dtos/user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }

  async findUsers(): Promise<User[]> {
    const users = await this.usersRepository.findUsers();
    return users;
  }

  async findUserByNick(nick: string): Promise<User> {
    const user = await this.usersRepository.findUserByNick(nick);
    if (user == null) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async signUp(body: CreateUserDto): Promise<void> {
    const user = await this.usersRepository.findUserByNick(body.nick);
    if (user != null) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    await this.usersRepository.create(body as User);
  }
}
