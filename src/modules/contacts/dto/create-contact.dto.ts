import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({
    description: 'Nome do contato que o usuário deseja adicionar',
    type: String,
    default: 'Pedro Silva',
  })
  @IsString()
  @IsNotEmpty()
  contact_name: string;

  @ApiProperty({
    description: 'E-mail do contato adicionado ',
    type: String,
    default: 'pedro@mail.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Telefone do contato adicionado',
    type: String,
    default: '99999999999',
  })
  @IsString()
  @IsNotEmpty()
  phones_number: string;

  @ApiProperty({
    description: 'Url da imagem escolhida para o usuário',
    type: String,
    default:
      'https://static.vecteezy.com/ti/fotos-gratis/t2/2010315-homem-bonito-asiatico-com-bigode-sorrindo-sobre-fundo-branco-gratis-foto.jpg',
  })
  @IsString()
  @Optional()
  contact_image: string | null;
}
