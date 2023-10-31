import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDTO } from './dtos/user.dto';

@Injectable()
export class AppService {
  getHealth(): string {
    return 'I\'m OK!';
  }

  private users: User[];

  constructor() {
    this.users = [
      new User('AZZURAH', 'Azzurah', 'azzurah@mail.com', '123'),
      new User('SARAH', 'Sarah', 'sarah@mail.com', '123')
    ];
  }

  findUsers(): User[] {
    return this.users;
  }

  findUserByNick(nick: string): User | undefined {
    return this.users.find(u => u.nick === nick);
  }

  signUp(body: CreateUserDTO): void {
    const { nick, name, email, password } = body;

    if (this.users.some(u => u.nick === nick)) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    this.users.push(new User(nick, name, email, password));
  }
}
