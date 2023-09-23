/* eslint-disable prettier/prettier */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    @InjectModel('user') private readonly users: Model<any>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
        const user = await this.users.findById(req.user);
      
      if (user.id == req.user) {
          return true;
      }else{
        throw new UnauthorizedException('user Not Found');
      }
    } catch (error) {
      return false;
    }
  }
}
