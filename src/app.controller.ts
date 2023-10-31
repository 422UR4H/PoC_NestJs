import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHealth();
  }

  @Get('users')
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  @Get('users/:nick') // se fosse um id, usaríamos @Param('id', ParseIntPipe) id: number
  getUserByNick(@Param('nick') nick: string): User | undefined {
    return this.appService.getUserByNick(nick);
  }

  @Post('users')
  postUserByNick(@Body() body: CreateUserDto): void {
    return this.appService.postUser(body);
  }
}
