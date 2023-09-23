import { ApiProperty } from '@nestjs/swagger';
export class CreateCatagoryDto {
  @ApiProperty()
  name: string;
}
