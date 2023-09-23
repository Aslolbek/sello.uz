import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { favoritesSchema } from 'src/shared/models/favorites.model';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/shared/models/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'favorite', schema: favoritesSchema },
      { name: 'user', schema: userSchema },
    ]),
  ],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
