import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { BrendService } from './brend.service';
import { CreateBrendDto } from './dto/create-brend.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('BREND')
@Controller('brend')
export class BrendController {
  constructor(private readonly brendService: BrendService) {}

  @Post()
  create(@Body() createBrendDto: CreateBrendDto) {
    return this.brendService.create(createBrendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brendService.remove(id);
  }
}
