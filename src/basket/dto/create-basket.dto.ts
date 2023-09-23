import { ApiProperty } from '@nestjs/swagger';
export class CreateBasketDto {
  @ApiProperty()
  productId: string;
}
