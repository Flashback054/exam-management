import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { SignupUserDto } from '../dto/signup.user.dto';
import { LoginUserDto } from '../dto/login.user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() user: SignupUserDto) {
    return await this.authService.signup(user);
  }

  // @Post('login')
  // async login(@Body() user: LoginUserDto) {
  //   return await this.authService.login(user);
  // }
}
