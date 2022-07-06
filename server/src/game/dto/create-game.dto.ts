import { IsArray, IsBoolean, IsDate, IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsString()
  text: string;

  @IsDate()
  date?: Date;

  @IsString()
  gameAuthor: string;

  @IsBoolean()
  isOpen?: false;

  @IsArray()
  teamInGame?: string[];
}

export type PatchGameDto = Partial<CreateGameDto>;
