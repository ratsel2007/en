import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  title: string;

  @IsArray()
  players?: string[];

  @IsNumber()
  progressInGame: number;
}
