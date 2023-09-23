import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('product') private readonly products: Model<any>,
    @InjectModel('vendor') private readonly vendors: Model<any>,
    @InjectModel('catagory') private readonly catagorys: Model<any>,
  ) {}
  async create(
    { name, brendId, price, catagoryId }: CreateProductDto,
    req: any,
  ) {
    await this.products.create({
      name,
      brendId,
      vendorId: req.user,
      price,
      catagoryId,
    });
    return 'This action adds a new product';
  }

  async findAll(req: any) {
    const vendorproduct = await this.products.find({ vendorId: req.user });
    return `${vendorproduct}`;
  }

  async findOne(id: string) {
    const product = await this.products.findById(id).populate('vendorId');
    return `${product}`;
  }

  async update(
    id: string,
    { name, price, brendId }: UpdateProductDto,
    req: any,
  ) {
    const product = await this.products.findById(id);
    if (product.vendorId == req.user) {
      await this.products.findByIdAndUpdate(id, {
        $set: { name, brendId, price },
      });
      return `This action updates a #${id} product`;
    } else {
      return `the change was not made`;
    }
  }

  async remove(id: string, req: any) {
    const product = await this.products.findById(id);
    if (product.vendorId == req.user) {
      await this.products.findByIdAndDelete(id);
      return `This action removes a #${id} product`;
    } else {
      return `deletion failed`;
    }
  }
}
