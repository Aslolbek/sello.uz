import { Injectable } from '@nestjs/common';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DiscountService {
  constructor(
    @InjectModel('discount') private readonly discounts: Model<any>,
    @InjectModel('product') private readonly products: Model<any>,
  ) {}
  async create({ productId, discountPercentage }: CreateDiscountDto, req: any) {
    const product = await this.products.findById(productId);
    console.log(product.vendorId);
    if (product.vendorId == req.user) {
      await this.discounts.create({ productId, discountPercentage });
      return 'Success';
    } else {
      return 'the seller did not come';
    }
  }

  async findAll() {
    const discount = await this.discounts.find().populate('productId');
    return `${discount}`;
  }

  async findOne(id: string) {
    const discount = await this.discounts.findById(id).populate('productId');
    return `${discount}`;
  }

  async update(
    discountId: string,
    { discountPercentage }: CreateDiscountDto,
    req: any,
  ) {
    const { productId } = await this.discounts
      .findById(discountId)
      .populate('productId');
    if (productId.vendorId == req.user) {
      await this.discounts.findByIdAndUpdate(discountId, {
        $set: { discountPercentage },
      });
      return `This action updates a # discount`;
    } else {
      return `the change was not made`;
    }
  }

  async remove(id: string, req: any) {
    const { productId } = await this.discounts.findById(id);
    if (productId.vendorId == req.user) {
      await this.discounts.findByIdAndDelete(id);
      return `This action removes a #${id} discount`;
    } else {
      return `Deletion failed`;
    }
  }
}
