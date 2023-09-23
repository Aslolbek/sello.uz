import { Module } from '@nestjs/common';
import { BrendService } from './brend.service';
import { BrendController } from './brend.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { brendSchema } from 'src/shared/models/brend.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'brend', schema: brendSchema }]),
  ],
  controllers: [BrendController],
  providers: [BrendService],
})
export class BrendModule {}
