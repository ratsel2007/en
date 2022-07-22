import { IsBoolean, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateAnswerDto {
  teamId: Types.ObjectId;

  @IsString()
  user: string;

  taskId: Types.ObjectId;

  @IsString()
  answer: string;

  @IsBoolean()
  right: boolean;
}

export class PatchAnswerToRightDto {
  @IsBoolean()
  right: boolean;
}
