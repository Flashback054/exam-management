import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { UserService } from 'src/domain/user/service/user.service';
import bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { LoginUserDto } from '../dto/login.user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  async signup(signupDto) {
    const user = await this.userService.findOneByEmail(signupDto.email);
    if (user) {
      throw new ConflictException('User already exists.');
    }

    const hashedPassword = await bcrypt.hash(
      signupDto.password,
      this.configService.get('SALT_ROUNDS'),
    );

    const newUser = await this.userService.create({
      ...signupDto,
      password: hashedPassword,
    });

    return newUser;
  }

  async getAuthenticatedUser(loginUserDto: LoginUserDto) {
    // Check if user exists
    const user = await this.userService.findOneByEmail(loginUserDto.email);
    if (!user) {
      throw new BadRequestException('Incorrect username or password.');
    }

    // Check if password is valid
    await this.verifyPassword(loginUserDto.password, user.password);

    return user;
  }

  private async verifyPassword(password: string, hashedPassword: string) {
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    if (!isPasswordValid) {
      throw new BadRequestException('Incorrect username or password.');
    }
  }
}
