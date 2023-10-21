import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
