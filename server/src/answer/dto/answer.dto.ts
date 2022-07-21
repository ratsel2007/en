import { IsBoolean, IsString } from 'class-validator';

export class CreateAnswerDto {
  @IsString()
  teamTitle: string;

  @IsString()
  user: string;

  @IsString()
  taskId: string;

  @IsString()
  answer: string;

  @IsBoolean()
  right: boolean;
}

export class PatchAnswerToRightDto {
  @IsBoolean()
  right: boolean;
}
