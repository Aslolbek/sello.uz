import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { vendorSchema } from 'src/shared/models/vendor.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'vendor', schema: vendorSchema }]),
  ],
  controllers: [VendorController],
  providers: [VendorService],
})
export class VendorModule {}
