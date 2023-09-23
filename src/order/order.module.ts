import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { orderSchema } from 'src/shared/models/order.model';
import { productSchema } from 'src/shared/models/product.model';
import { userSchema } from 'src/shared/models/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'order', schema: orderSchema },
      { name: 'product', schema: productSchema },
      { name: 'user', schema: userSchema },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
