/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
export class login {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
