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
  findUserByNick(@Param('nick') nick: string): User | undefined {
    return this.appService.findUserByNick(nick);
  }

  @Post('sign-up')
  signUp(@Body() body: CreateUserDTO): void {
    return this.appService.signUp(body);
  }
}
