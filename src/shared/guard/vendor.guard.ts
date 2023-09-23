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
  export class VendorGuard implements CanActivate {
    constructor(
      @InjectModel('vendor') private readonly vendors: Model<any>,
    ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const req = context.switchToHttp().getRequest();
      try {
        const vendor = await this.vendors.findById(req.id);
        if (vendor.id == req.user ) {
            return true;
        }else{
          throw new UnauthorizedException('vendor Not Found');
        }
      } catch (error) {
        return false;
      }
    }
  }
  