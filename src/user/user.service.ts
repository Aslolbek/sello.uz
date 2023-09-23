import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager/dist';
import * as shortid from 'shortid';
import * as nodemailer from 'nodemailer';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cache } from 'cache-manager';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { create } from './dto/create-user.dto';
import { update } from './dto/update.dto';
import { confirm } from './dto/confirm.dto';
import { login } from './dto/login.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('user') private readonly users: Model<any>,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async confirmation({ email }: create) {
    const user = await this.users.findOne({ email });
    if (!user) {
      const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
          user: 'nasirullayevo7@gmail.com',
          pass: 'smenmggcgonbqmwl',
        },
        secure: true,
      });

      const timedPassword = await shortid.generate();
      await this.cacheManager.set(`key`, `${timedPassword}`, 0);
      const mailData = {
        from: 'nasirullayevo7@gmail.com', // sender address
        to: `${email}`, // list of receivers
        subject: 'Sending Email using Node.js',
        text: `Tasdiqlash Kodi:${timedPassword}`,
      };
      await transporter.sendMail(mailData);
      return ` Emailingizga tasdiqlash uchun kod yuborildi! `;
    } else {
      return ' Emaildan royhatdan otilgan!';
    }
  }

  async acceptance({ email, password, vericationCode }: confirm) {
    const key = await this.cacheManager.get('key');
    if (key === vericationCode) {
      const hashpassword = await bcrypt.hash(password, 10);
      const user = await this.users.create({ email, password: hashpassword });
      const token = await this.jwtService.sign({ id: user.id });
      return ` Sizning akountiz faol boldi!, ${token} `;
    } else {
      return ` Tasdiqlash kodi eskirgan! `;
    }
  }

  async login({ email, password }: login) {
    const users = await this.users.findOne({ email });
    console.log(users);
    if (!users) {
      return `foydalanuvchi mavjud emas`;
    } else {
      const check = await bcrypt.compare(password, users.password);
      if (check) {
        const token = await this.jwtService.sign({ id: users.id });
        return `Siz tizimga kirdingiz: TOKEN: ${token}`;
      } else {
        return `parol xato`;
      }
    }
  }

  async findAll() {
    const data = await this.users.find();
    return `${data}`;
  }

  async findOne(id: string) {
    const data = await this.users.findById(id);
    return `${data}`;
  }

  async update(
    id: string,
    { username, name, surname, birthday, gender, profilePicture }: update,
  ) {
    const user = await this.users.findById(id);
    if (user) {
      await this.users.findByIdAndUpdate(id, {
        $set: {
          username,
          name,
          surname,
          birthday,
          gender,
          profilePicture,
        },
      });
      return `This action updates a #${id} user`;
    } else {
      return `Malumot saqlanmadi takror urinib koring`;
    }
  }

  async remove(id: string) {
    await this.users.findByIdAndDelete(id);
    return `This action removes a #${id} user`;
  }
}
