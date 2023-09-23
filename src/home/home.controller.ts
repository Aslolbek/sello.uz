import { Controller, Get, Param } from '@nestjs/common';
import { HomeService } from './home.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('HOME')
@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  findAll() {
    return this.homeService.findAll();
  }

  @Get(':id')
  catagoryfindOneAndProduct(@Param('id') id: string) {
    return this.homeService.catagoryfindOneAndProduct(id);
  }
  @Get(':id')
  brandfindOneAndProduct(@Param('id') id: string) {
    return this.homeService.brandfindOneAndProduct(id);
  }
}
