import { IsArray, IsBoolean, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description?: string;

  @IsString()
  image?: string;

  @IsString()
  video?: string;

  @IsString()
  music?: string;

  @IsString()
  text?: string;

  @IsArray()
  codeLevel: string[];

  @IsArray()
  codeDescription: string[];

  @IsArray()
  address: string[];

  @IsArray()
  codeAnswer: string[];

  @IsString()
  hint1: string;

  @IsString()
  hint2: string;

  @IsString()
  hint3: string;

  @IsBoolean()
  autoComplete?: boolean;

  @IsString()
  gameId?: string;
}

export type PatchTaskDto = Partial<CreateTaskDto>;