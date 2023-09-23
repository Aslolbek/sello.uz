import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { VendorService } from './vendor.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { BeltGuard } from 'src/shared/guard/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { vendorlogin } from './dto/vendorlogin.dto';

@ApiTags('VENDOR')
@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Post('register')
  register(@Body() createVendorDto: CreateVendorDto) {
    return this.vendorService.register(createVendorDto);
  }

  @Post('login')
  login(@Body() createVendorDto: vendorlogin) {
    return this.vendorService.login(createVendorDto);
  }

  @Get()
  findAll() {
    return this.vendorService.findAll();
  }

  @Get(':id')
  @UseGuards(BeltGuard)
  findOne(@Param('id') id: string) {
    return this.vendorService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(BeltGuard)
  update(@Param('id') id: string, @Body() updateVendorDto: UpdateVendorDto) {
    return this.vendorService.update(id, updateVendorDto);
  }

  @Delete(':id')
  @UseGuards(BeltGuard)
  remove(@Param('id') id: string) {
    return this.vendorService.remove(id);
  }
}
