import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    // Creates object with user data
    PassportModule,
    // Creates the authentication token
    JwtModule.register({
      // TODO: Need a more difficult secret
      secret: 'abc123',
      signOptions: {
        expiresIn: '2d',
      },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, LocalStrategy],
})
export class AuthenticationModule {}
