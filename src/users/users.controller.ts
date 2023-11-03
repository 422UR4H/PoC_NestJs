import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/user.dto';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { };

  @Get('users')
  findUsers(): User[] {
    return this.usersService.findUsers();
  }

  @Get('users/:nick') // se fosse um id, usaríamos @Param('id', ParseIntPipe) id: number
  findUserByNick(@Param('nick') nick: string) {
    const user = this.usersService.findUserByNick(nick);
    return this.formatUser(user);
  }

  @Post('sign-up')
  signUp(@Body() body: CreateUserDTO): void {
    return this.usersService.signUp(body);
  }

  private formatUser(user: User) {
    const { nick, email, name, password } = user;
    return { nick, email, name, password };
  }
}
