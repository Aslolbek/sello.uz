import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { BeltGuard } from 'src/shared/guard/auth.guard';
import { VendorGuard } from 'src/shared/guard/vendor.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('DISCOUNT')
@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Post()
  @UseGuards(BeltGuard, VendorGuard)
  create(@Body() createDiscountDto: CreateDiscountDto, @Req() req: any) {
    return this.discountService.create(createDiscountDto, req);
  }

  @Get()
  findAll() {
    return this.discountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountService.findOne(id);
  }

  @Patch(':discountId')
  @UseGuards(BeltGuard, VendorGuard)
  update(
    @Param('discountId') discountId: string,
    @Body() updateDiscountDto: CreateDiscountDto,
    @Req() req: any,
  ) {
    return this.discountService.update(discountId, updateDiscountDto, req);
  }

  @Delete(':id')
  @UseGuards(BeltGuard, VendorGuard)
  remove(@Param('id') id: string, @Req() req: any) {
    return this.discountService.remove(id, req);
  }
}
