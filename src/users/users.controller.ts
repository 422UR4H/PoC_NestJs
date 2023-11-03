import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { };

  @Get()
  findUsers(): Promise<User[]> {
    return this.usersService.findUsers();
  }

  @Get(':nick') // se fosse um id, usaríamos @Param('id', ParseIntPipe) id: number
  findUserByNick(@Param('nick') nick: string): Promise<User> {
    return this.usersService.findUserByNick(nick);
  }

  @Post()
  signUp(@Body() body: CreateUserDto): Promise<void> {
    return this.usersService.signUp(body);
  }
}
