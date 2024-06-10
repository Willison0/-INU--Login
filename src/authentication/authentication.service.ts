import { Injectable } from '@nestjs/common';
import { LoginPayloadDto } from './dataTransferObject/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client/edge';
const prisma = new PrismaClient();

const fakeUsers = prisma.users;
@Injectable()
export class AuthenticationService {
  constructor(private jwtService: JwtService) {}

  async validateUser({ username, password }: LoginPayloadDto) {
    const foundUser = await fakeUsers.findFirst({
      where: {
        user_name: username,
      },
    });
    if (!foundUser) {
      return null;
    }

    if (password === foundUser.password) {
      const { password, ...user } = foundUser;
      return this.jwtService.sign(user);
    }
  }
}
