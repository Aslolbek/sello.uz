import { ApiProperty } from '@nestjs/swagger';
export class CreateOrderDto {
  @ApiProperty()
  typeOfDelivery: string;
  @ApiProperty()
  deliveryDate: string;
  @ApiProperty()
  deliveryTime: string;
  @ApiProperty()
  region: string;
  @ApiProperty()
  district: string;
  @ApiProperty()
  home: string;
  @ApiProperty()
  orders: string;
}
