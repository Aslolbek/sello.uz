import { Injectable } from '@nestjs/common';
import { CreateBrendDto } from './dto/create-brend.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BrendService {
  constructor(@InjectModel('brend') private readonly brends: Model<any>) {}
  async create({ name }: CreateBrendDto) {
    await this.brends.create({ name });
    return 'This action adds a new brend';
  }

  async remove(id: string) {
    await this.brends.findByIdAndDelete(id);
    return `This action removes a #${id} brend`;
  }
}
