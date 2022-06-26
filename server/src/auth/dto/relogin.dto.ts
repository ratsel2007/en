import { IsString } from 'class-validator';

export class ReLoginDto {
  @IsString()
  token: string;
}
