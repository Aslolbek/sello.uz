/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
export class confirm {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  vericationCode: number
}