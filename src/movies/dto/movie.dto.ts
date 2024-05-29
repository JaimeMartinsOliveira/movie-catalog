import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty({ example: 'Inception', description: 'Título do filme.' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Um ladrão que invade os sonhos das pessoas para roubar segredos é oferecido a chance de apagar seu passado como pagamento por implantar uma ideia na mente de um CEO."',
    description: 'Descrição do filme.',
    required: false,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'Christopher Nolan',
    description: 'Diretor do filme.',
    required: false,
  })
  @IsString()
  director?: string;

  @ApiProperty({ example: 2010, description: 'Ano de lançamento do filme.' })
  @IsNumber()
  @IsNotEmpty()
  year: number;

  @ApiProperty({
    example: 8.8,
    description:
      'Avaliação do IMDB de 0 à 10. Aceita um número decimal se a Avaliação não for 10',
    maximum: 10,
    minimum: 0,
  })
  @IsNumber({ maxDecimalPlaces: 1 })
  @IsNotEmpty()
  imdbRating: number;

  @ApiProperty({
    description: 'Imagem do banner/capa do filme.',
    example: 'https://exemplo.com/inception-banner.jpg',
  })
  @IsString()
  @IsNotEmpty()
  bannerUrl: string;
}

export class MovieDto {
  @ApiProperty({
    example: '2b-xy34z2j3m4-5678efg56-hij',
    description: 'ID do filme.',
  })
  id: string;

  @ApiProperty({ example: 'Inception', description: 'Título do filme.' })
  title: string;

  @ApiProperty({
    example: 'Um ladrão que invade os sonhos das pessoas para roubar segredos é oferecido a chance de apagar seu passado como pagamento por implantar uma ideia na mente de um CEO.',
    description: 'Descrição do filme.',
    required: false,
  })
  description: string;

  @ApiProperty({
    example: 'Christopher Nolan',
    description: 'Diretor do filme.',
    required: false,
  })
  director: string;

  @ApiProperty({ example: 2010, description: 'Ano de lançamento do filme.' })
  year: number;

  @ApiProperty({ example: 8.8, description: 'Avaliação do IMDB.' })
  imdbRating: number;

  @ApiProperty({
    description: 'Imagem do banner/capa do filme.',
    example: 'https://exemplo.com/inception-banner.jpg',
  })
  bannerUrl: string;

  @ApiProperty({
    example: '2021-10-15T15:00:00.000Z',
    description: 'Data de criação do filme.',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2021-10-15T15:00:00.000Z',
    description: 'Data de atualização do filme.',
  })
  updatedAt: Date;
}
