import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(private readonly jwtService: JwtService) {}
  async login({ username, password }: CreateAdminDto) {
    if (username === 'Abdimannonov') {
      if (password === 'Asror') {
        const token = await this.jwtService.sign({ id: 'Asror' });
        return `Tizimga kirildi! ${token}`;
      } else {
        return 'Yashirin soz hato';
      }
    } else {
      return 'Username XATO!';
    }
    return '';
  }
}
