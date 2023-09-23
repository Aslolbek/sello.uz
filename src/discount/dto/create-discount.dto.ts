import { ApiProperty } from '@nestjs/swagger';
export class CreateDiscountDto {
  @ApiProperty()
  productId: string;
  @ApiProperty()
  discountPercentage: number;
}
