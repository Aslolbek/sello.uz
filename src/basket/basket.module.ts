import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { basketSchema } from 'src/shared/models/basket.model';
import { userSchema } from 'src/shared/models/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'basket', schema: basketSchema },
      { name: 'user', schema: userSchema },
    ]),
  ],
  controllers: [BasketController],
  providers: [BasketService],
})
export class BasketModule {}
