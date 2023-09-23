import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('order') private readonly orders: Model<any>,
    @InjectModel('product') private readonly products: Model<any>,
  ) {}
  async create({
    typeOfDelivery,
    deliveryDate,
    deliveryTime,
    region,
    district,
    home,
    orders,
  }: CreateOrderDto) {
    await this.orders.create({
      typeOfDelivery,
      deliveryDate,
      deliveryTime,
      region,
      district,
      home,
      orders,
    });
    return 'This action adds a new order';
  }

  async findAll(req: any) {
    const orders = await this.orders.find({ userId: req.user });
    return `${orders}`;
  }

  async findOne(id: string, req: any) {
    const order = await this.orders
      .find({ userId: req.user, productId: id })
      .populate('productId');
    return `${order}`;
  }

  async remove(id: string, req: any) {
    await this.orders.findOneAndDelete({ userId: req.user, productId: id });
    return `This action removes a #${id} order`;
  }
}
