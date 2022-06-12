import { IsString } from 'class-validator';

export class CreateTaskDto {
  title: string;
  description?: string;
  image?: string;
  video?: string;
  music?: string;
  text?: string;
  codeLevel: string[];
  codeDescription: string[];
  adress: string[];
  codeAnswer: string[];
  hint1: string;
  hint2: string;
  hint3: string;
  autoComplete?: boolean;
  gameId: string;
}
