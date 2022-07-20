import { IsBoolean, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsString()
  teamId?: string;

  @IsBoolean()
  author?: boolean;
}
