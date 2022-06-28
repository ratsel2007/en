import { IsDate, IsString } from 'class-validator';

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

export type PatchGameDto = Partial<CreateGameDto>;
