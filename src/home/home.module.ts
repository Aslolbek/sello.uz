import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { catagorySchema } from 'src/shared/models/catagory.model';
import { discountSchema } from 'src/shared/models/discount.model';
import { productSchema } from 'src/shared/models/product.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'catagory', schema: catagorySchema },
      { name: 'discount', schema: discountSchema },
      { name: 'product', schema: productSchema },
    ]),
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
