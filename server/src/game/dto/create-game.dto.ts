import { IsArray, IsBoolean, IsDate, IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsDate()
  date?: Date;

  @IsString()
  gameAuthor: string;
}

export class PatchGameDto {
  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsDate()
  date?: Date;

  @IsString()
  gameAuthor: string;

  @IsBoolean()
  isOpen: false;

  @IsArray()
  teamInGame: string[];
}
