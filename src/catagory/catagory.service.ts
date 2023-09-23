import { Injectable } from '@nestjs/common';
import { CreateCatagoryDto } from './dto/create-catagory.dto';
import { UpdateCatagoryDto } from './dto/update-catagory.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CatagoryService {
  constructor(
    @InjectModel('catagory') private readonly catagorys: Model<any>,
  ) {}
  async create({ name }: CreateCatagoryDto) {
    await this.catagorys.create({ name });
    return 'This action adds a new catagory';
  }

  async findAll() {
    const catagorys = await this.catagorys.find();
    return `${catagorys}`;
  }

  async findOne(id: string) {
    const catagory = await this.catagorys.findOne({ id: id });
    return `${catagory}`;
  }

  async update(id: string, { name }: UpdateCatagoryDto) {
    await this.catagorys.findByIdAndUpdate(id, { $set: { name } });
    return `This action updates a #${id} catagory`;
  }

  async remove(id: string) {
    await this.catagorys.findByIdAndDelete(id);
    return `This action removes a #${id} catagory`;
  }
}
