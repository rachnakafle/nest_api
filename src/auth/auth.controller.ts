import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService:AuthService){}
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  //   async login(@Body() loginDto: any) {
  //     return this.authService.validateUser(loginDto.email, loginDto.password);
  //   }
  async login(@Request() req: any) {
    // return req.user;
    return this.authService.login(req.user);
  }
}
