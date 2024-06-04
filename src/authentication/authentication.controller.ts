import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';
import { RegisterPayloadDto } from './dataTransferObject/auth.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  @Post('login')
  // Calls the strategy
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    return req.user;
  }

  @Post('register')
  @UseGuards(LocalGuard)
  async register(@Req() registerPayload: RegisterPayloadDto) {
    // TODO Pushing data to database.
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    console.log('AuthController status method');
    console.log(req.user);
    return req.user;
  }
}
