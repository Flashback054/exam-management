import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class SignupUserDto {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
