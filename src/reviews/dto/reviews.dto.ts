import { IsString, IsInt } from 'class-validator';

export class ReviewDto {
  @IsInt()
  id: number;

  @IsString()
  body: string;
}
