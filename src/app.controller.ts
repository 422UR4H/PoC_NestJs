import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { CreateUserDTO } from './dtos/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Get('users')
  findUsers(): User[] {
    return this.appService.findUsers();
  }

  @Get('users/:nick') // se fosse um id, usaríamos @Param('id', ParseIntPipe) id: number
  findUserByNick(@Param('nick') nick: string) {
    const user = this.appService.findUserByNick(nick);
    return this.formatUser(user);
  }

  @Post('sign-up')
  signUp(@Body() body: CreateUserDTO): void {
    return this.appService.signUp(body);
  }

  private formatUser(user: User) {
    const { nick, email, name, password } = user;
    return { nick, email, name, password };
  }
}
