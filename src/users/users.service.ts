import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/user.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
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

  findUserByNick(nick: string): User {
    const user = this.users.find(u => u.nick === nick);

    if (user == null) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }
    return user;
  }

  signUp(body: CreateUserDTO): void {
    const { nick, name, email, password } = body;

    if (this.users.some(u => u.nick === nick)) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    this.users.push(new User(nick, name, email, password));
  }
}