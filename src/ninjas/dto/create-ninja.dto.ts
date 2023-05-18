import { MinLength, IsEnum } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;
  @IsEnum(['stars', 'nunchucks'], { message: 'Use correct weapon!' }) // Custom error message for validation
  weapon: 'stars' | 'nunchucks';
}
