import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/user.dto';

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

  getUsers(): User[] {
    return this.users;
  }

  getUserByNick(nick: string): User | undefined {
    return this.users.find(u => u.nick === nick);
  }

  postUser(body: CreateUserDto): void {
    const { nick, name, email, password } = body;
    this.users.push(new User(nick, name, email, password));
  }
}
