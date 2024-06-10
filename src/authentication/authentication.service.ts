import { Injectable } from '@nestjs/common';
import {
  LoginPayloadDto,
  RegisterPayloadDto,
} from './dataTransferObject/auth.dto';
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

  async createUser({
    fName,
    sName,
    fSurname,
    sSurname,
    gender,
    birthdate,
    nationalId,
    nationality,
    country,
    detailedAddress,
    description,
    username,
    password,
    email,
  }: RegisterPayloadDto) {
    const foundUser = await fakeUsers.findFirst({
      where: {
        user_name: username,
      },
    });
    if (foundUser) {
      return null;
    } else {
      const user = await prisma.personas.create({
        data: {
          p_nombre: fName,
          s_nombre: sName,
          p_apellido: fSurname,
          s_apellido: sSurname,
          genero: gender,
          fecha_nacimiento: birthdate,
          cedula: nationalId,
          nacionalidad: nationality,
          pais: country,
          direccion_detallada: detailedAddress,
          descripcion_personal: description,
          users: {
            create: {
              user_name: username,
              password: password,
              email: email,
              create_at: new Date(),
              idtipo_usuario: 1, // provide a valid idtipo_usuario value
            },
          },
        },
        include: {
          users: true,
        },
      });
    }
  }
}
