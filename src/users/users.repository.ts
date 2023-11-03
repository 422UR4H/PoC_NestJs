import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) { }

  async findUsers() {
    return await this.prisma.user.findMany();
  }

  async findUserByNick(nick: string) {
    return await this.prisma.user.findUnique({ where: { nick } });
  }

  async create(data: User) {
    console.log(data)
    return await this.prisma.user.create({ data });
  }
}