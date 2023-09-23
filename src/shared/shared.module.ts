/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './models/user.model';
import { vendorSchema } from './models/vendor.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'user', schema: userSchema },
      { name: 'vendor', schema: vendorSchema },
    ]),
  ],
})
export class SharedModule {}
