import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { BeltGuard } from 'src/shared/guard/auth.guard';
import { UserGuard } from 'src/shared/guard/user.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ORDER')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @UseGuards(BeltGuard, UserGuard)
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  //User buyurtmalarini korishi uchun
  @Get()
  @UseGuards(BeltGuard, UserGuard)
  findAll(@Req() req: any) {
    return this.orderService.findAll(req);
  }

  //User buyurtmalarini korishi uchun
  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: any) {
    return this.orderService.findOne(id, req);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: any) {
    return this.orderService.remove(id, req);
  }
}
