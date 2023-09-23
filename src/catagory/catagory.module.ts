import { Module } from '@nestjs/common';
import { CatagoryService } from './catagory.service';
import { CatagoryController } from './catagory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { catagorySchema } from 'src/shared/models/catagory.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'catagory', schema: catagorySchema }]),
  ],
  controllers: [CatagoryController],
  providers: [CatagoryService],
})
export class CatagoryModule {}
