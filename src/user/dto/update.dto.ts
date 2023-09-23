/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
export class update {
  @ApiProperty()
  username: string;
  @ApiProperty()
      name: string;
      @ApiProperty()
      surname: string;
      @ApiProperty()
      birthday: string;
      @ApiProperty()
      gender: string;
      @ApiProperty()
      profilePicture: string
}
