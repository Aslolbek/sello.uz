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
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { BeltGuard } from 'src/shared/guard/auth.guard';
import { VendorGuard } from 'src/shared/guard/vendor.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PRODUCT')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(BeltGuard, VendorGuard)
  create(@Body() createProductDto: CreateProductDto, @Req() req: any) {
    return this.productService.create(createProductDto, req);
  }

  // Sotuvchi o'zini mahsulotini ko'rishi uchun
  @Get()
  @UseGuards(BeltGuard, VendorGuard)
  findAll(@Req() req: any) {
    return this.productService.findAll(req);
  }

  @Get(':id')
  @UseGuards(BeltGuard, VendorGuard)
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(BeltGuard, VendorGuard)
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @Req() req: any,
  ) {
    return this.productService.update(id, updateProductDto, req);
  }

  @Delete(':id')
  @UseGuards(BeltGuard, VendorGuard)
  remove(@Param('id') id: string, @Req() req: any) {
    return this.productService.remove(id, req);
  }
}
