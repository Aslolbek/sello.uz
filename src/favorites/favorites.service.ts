import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel('favorite') private readonly favorites: Model<any>,
  ) {}
  async create(productId: CreateFavoriteDto, req: any) {
    await this.favorites.create({ productId, userId: req.user });
    return 'This action adds a new favorite';
  }

  async findAll(req: any) {
    const favorite = await this.favorites.find({ userId: req.user });
    return `${favorite}`;
  }

  async findOne(id: string, req: any) {
    const favorite = await this.favorites.find({
      userId: req.user,
      productId: id,
    });
    return `${favorite}`;
  }

  async remove(productId: string, req: any) {
    const favorite = await this.favorites.findOne({ productId });
    if (favorite.userId === req.user) {
      await this.favorites.findByIdAndDelete(favorite.id);
      return `This action removes a #$ favorite`;
    } else {
      return `o'chirish huquqi sizda yo'q`;
    }
  }
}
