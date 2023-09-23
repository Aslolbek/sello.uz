import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { vendorlogin } from './dto/vendorlogin.dto';

@Injectable()
export class VendorService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('vendor') private readonly vendors: Model<any>,
  ) {}

  async register({
    username,
    name,
    surname,
    password,
    email,
  }: CreateVendorDto) {
    const vendor = await this.vendors.findOne({ username });
    if (vendor) {
      return `${username} foydalanuvchi nomi bant`;
    } else {
      const hashpassword = await bcrypt.hash(password, 10);
      const vendor = await this.vendors.create({
        username,
        name,
        surname,
        password: hashpassword,
        email,
      });
      // await this.vendors.create({ vendorId: vendor.id, value: 0 });
      return `Royxatdan muvofaqqiyatli o'tdi ${vendor.id}`;
    }
  }

  async login({ username, password }: vendorlogin) {
    const vendor = await this.vendors.findOne({ username });
    if (vendor) {
      const check = await bcrypt.compare(password, vendor.password);
      if (check) {
        const token = await this.jwtService.sign({ id: vendor.id });
        return `Siz tizimga kirdingiz: ${token}`;
      } else {
        return `Parol xato!`;
      }
    } else {
      return ` Siz royxatdan otmagansiz!`;
    }
  }

  async findAll() {
    const data = await this.vendors.find();
    return `${data}`;
  }

  async findOne(id: string) {
    const data = await this.vendors.findById(id);
    return `${data}`;
  }

  async update(id: string, {}: UpdateVendorDto) {
    return `This action updates a #${id} vendor`;
  }

  async remove(id: string) {
    await this.vendors.findByIdAndDelete(id);
    return `This action removes a #${id} vendor`;
  }
}
