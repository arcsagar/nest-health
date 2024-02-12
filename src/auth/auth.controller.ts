import { Controller, Post, UseGuards,Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public } from './auth-public.strategy';

@Controller('auth')
export class AuthController {

    constructor(private authServ: AuthService){}
  @Public()
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req) {
    console.log('req is login')
    // return req.user;
    return this.authServ.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
