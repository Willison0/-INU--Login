import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthenticationService } from '../authentication.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authservice: AuthenticationService) {
    super();
  }

  validate(username: string, password: string) {
    console.log('Can execute code inside LocalStrategy');
    const user = this.authservice.validateUser({ username, password });
    if (!user) throw new UnauthorizedException();
    else return user;
  }
}
