import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { VendorModule } from './vendor/vendor.module';
import { JwtModule } from '@nestjs/jwt';
import { BasketModule } from './basket/basket.module';
import { PaymentModule } from './payment/payment.module';
import { FavoritesModule } from './favorites/favorites.module';
import { OrderModule } from './order/order.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { CatagoryModule } from './catagory/catagory.module';
import { DiscountModule } from './discount/discount.module';
import { SharedModule } from './shared/shared.module';
import { BrendModule } from './brend/brend.module';
const jwt_key = 'topolmaysan';
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwt_key,
      signOptions: { expiresIn: '24h' },
    }),
    UserModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/sello'),
    ProductModule,
    VendorModule,
    BasketModule,
    PaymentModule,
    FavoritesModule,
    OrderModule,
    AdminModule,
    HomeModule,
    CatagoryModule,
    DiscountModule,
    SharedModule,
    BrendModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
