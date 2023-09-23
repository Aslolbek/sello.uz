import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class HomeService {
  constructor(
    @InjectModel('catagory') private readonly catagorys: Model<any>,
    @InjectModel('product') private readonly products: Model<any>,
    @InjectModel('discount') private readonly discounts: Model<any>,
  ) {}
  async findAll() {
    const discount = await this.discounts.find().populate('productId');
    const catagory = await this.catagorys.find();
    return `${catagory}, ${discount}`;
  }
  // catagory boyicha mahsulotlarni olib berish
  async catagoryfindOneAndProduct(id: string) {
    const products = await this.products.find({ catagoryId: id });
    return `${products}`;
  }

  // brand boyicha mahsulotlarni olib berish
  async brandfindOneAndProduct(id: string) {
    const products = await this.products.find({ brandId: id });
    return `${products}`;
  }
}
