import {
  Body,
  Controller,
  HttpException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthPayloadDto } from './dataTransferObject/auth.dto';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  @Post('login')
  // Calls the strategy 
  @UseGuards(AuthGuard('local'))
  login(@Body() authPayload: AuthPayloadDto) {
    const user = this.authService.validateUser(authPayload);

    if (!user) throw new HttpException('Invalid Credentials', 401);
    else return user;
  }
}
