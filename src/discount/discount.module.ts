import { Module } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { DiscountController } from './discount.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { discountSchema } from 'src/shared/models/discount.model';
import { productSchema } from 'src/shared/models/product.model';
import { vendorSchema } from 'src/shared/models/vendor.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'discount', schema: discountSchema },
      { name: 'product', schema: productSchema },
      { name: 'vendor', schema: vendorSchema },
    ]),
  ],
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule {}
