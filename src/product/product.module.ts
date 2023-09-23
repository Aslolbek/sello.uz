import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { productSchema } from '../shared/models/product.model';
import { vendorSchema } from 'src/shared/models/vendor.model';
import { catagorySchema } from 'src/shared/models/catagory.model';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'product', schema: productSchema },
      { name: 'vendor', schema: vendorSchema },
      { name: 'catagory', schema: catagorySchema },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
