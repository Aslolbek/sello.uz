import { ApiProperty } from '@nestjs/swagger';

export class CreateBrendDto {
  @ApiProperty()
  name: string;
}
