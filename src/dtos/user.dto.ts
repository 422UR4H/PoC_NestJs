import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  IsUppercase,
  Max,
  MaxLength,
  MinLength
} from "class-validator";


export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @IsUppercase()
  @MinLength(3)
  @MaxLength(8)
  nick: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(16)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @MinLength(11)
  @MaxLength(32)
  email: string;

  @IsStrongPassword({ minLength: 8 })
  @Max(32)
  password: string;
}