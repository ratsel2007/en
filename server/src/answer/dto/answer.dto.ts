import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateAnswerDto {
  @IsString()
  team: string;

  @IsString()
  user: string;

  @IsNumber()
  numberTask: number;

  @IsString()
  answer: string;

  @IsDate()
  date: Date;

  @IsBoolean()
  right: boolean;
}

export class PatchAnswerToRightDto {
  @IsBoolean()
  right: boolean;
}
