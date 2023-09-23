import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { BasketService } from './basket.service';
// import { CreateBasketDto } from './dto/create-basket.dto';
import { BeltGuard } from 'src/shared/guard/auth.guard';
import { UserGuard } from 'src/shared/guard/user.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('BASKET')
@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Post(':praductId')
  @UseGuards(BeltGuard, UserGuard)
  create(@Param('praductId') praductId: string, @Req() req: any) {
    return this.basketService.create(praductId, req);
  }

  @Get()
  @UseGuards(BeltGuard, UserGuard)
  findAll(@Req() req: any) {
    return this.basketService.findAll(req);
  }

  @Get(':productId')
  @UseGuards(BeltGuard, UserGuard)
  findOne(@Param('productId') productId: string, @Req() req: any) {
    return this.basketService.findOne(productId, req);
  }

  @Delete(':id')
  @UseGuards(BeltGuard, UserGuard)
  remove(@Param('id') id: string, @Req() req: any) {
    return this.basketService.remove(id, req);
  }
}
