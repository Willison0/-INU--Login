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
    fName: string,
    sName: string,
    fSurname: string,
    sSurname: string,
    gender: number,
    birthdate: Date,
    nationalId: number,
    country: number,
    detailedAddress: string,
    username: string,
    password: string,
    email: string,
    national_id: number,
    nationality: number,
    dateOfBirth: Date,
    socials: Social[],
    website: string,
    description: string,
  ) {
    const user = this.authservice.createUser({
      fName,
      sName,
      fSurname,
      sSurname,
      gender,
      birthdate,
      nationalId,
      country,
      detailedAddress,
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
