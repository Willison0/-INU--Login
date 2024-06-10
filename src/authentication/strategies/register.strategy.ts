import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthenticationService } from '../authentication.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Social } from '../dataTransferObject/auth.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authservice: AuthenticationService) {
    super();
  }

  validate(
    username: string,
    password: string,
    email: string,
    national_id: number,
    nationality: string,
    dateOfBirth: Date,
    socials: Social[],
    website: string,
    description: string,
  ) {
    const user = this.authservice.createUser({
      username,
      password,
      national_id,
      nationality,
      dateOfBirth,
      socials,
      website,
      description,
      email,
    });
    if (!user) throw new UnauthorizedException();
    else return user;
  }
}
