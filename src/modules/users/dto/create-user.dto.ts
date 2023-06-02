import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { hashSync } from 'bcryptjs';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
    default: 'João Fernandes',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @ApiProperty({
    description: 'E-mail do usuário',
    type: String,
    default: 'joao@mail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Telefone do usuário',
    type: String,
    default: '99999999999',
  })
  @IsString()
  @IsNotEmpty()
  phones_number: string;

  @ApiProperty({
    description: 'Url com a imagem do usuário',
    type: String,
    default:
      'https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?w=2000',
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  user_image: string | null;

  @ApiProperty({
    description: 'Senha do usuário',
    type: String,
    default: '123456',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;
}
