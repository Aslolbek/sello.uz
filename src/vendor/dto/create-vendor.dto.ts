import { ApiProperty } from '@nestjs/swagger';
export class CreateVendorDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  surname: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  email: string;
}
