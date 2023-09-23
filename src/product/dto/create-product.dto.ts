import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  brendId: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  vendorId: string;
  @ApiProperty()
  catagoryId: string;
}
