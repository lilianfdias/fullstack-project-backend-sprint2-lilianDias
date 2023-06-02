import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty({
    description: 'E-mail do usuário',
    type: String,
    default: 'joao@mail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    type: String,
    default: '123456',
  })
  @IsString()
  password: string;
}
