/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
export class vendorlogin {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
