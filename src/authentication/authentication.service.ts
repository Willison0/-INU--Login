import { Injectable } from '@nestjs/common';
import { LoginPayloadDto } from './dataTransferObject/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
    {
        id: 1,
        username: 'anson',
        password: 'password'
    },
    {
        id: 2,
        username: 'jack',
        password: 'password123'
    }
]
@Injectable()
export class AuthenticationService {
    constructor(private jwtService: JwtService) {

    }

    validateUser({username, password}: LoginPayloadDto){
        const findUser = fakeUsers.find(
            (user) => user.username === username
         )
         if (!findUser) {
            return null
         }

         if (password === findUser.password) {
            const {password, ...user } = findUser;
            return this.jwtService.sign(user)
         }
    }
}
