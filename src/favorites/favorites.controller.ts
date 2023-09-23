import {
  Controller,
  Get,
  Post,
  Param,
  Req,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { BeltGuard } from 'src/shared/guard/auth.guard';
import { UserGuard } from 'src/shared/guard/user.guard';
import { ApiTags } from '@nestjs/swagger';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@ApiTags('FAVORITES')
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post(':productId')
  @UseGuards(BeltGuard, UserGuard)
  create(@Param('productId') productId: CreateFavoriteDto, @Req() req: any) {
    return this.favoritesService.create(productId, req);
  }

  @Get()
  @UseGuards(BeltGuard, UserGuard)
  findAll(@Req() req: any) {
    return this.favoritesService.findAll(req);
  }

  @Get(':productId')
  @UseGuards(BeltGuard, UserGuard)
  findOne(@Param('productId') productId: string, @Req() req: any) {
    return this.favoritesService.findOne(productId, req);
  }

  @Delete(':productId')
  @UseGuards(BeltGuard, UserGuard)
  remove(@Param('productId') productId: string, @Req() req: any) {
    return this.favoritesService.remove(productId, req);
  }
}
