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
import { UserService } from './user.service';
import { create } from './dto/create-user.dto';
import { BeltGuard } from 'src/shared/guard/auth.guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { confirm } from './dto/confirm.dto';
import { update } from './dto/update.dto';
import { login } from './dto/login.dto';

@ApiTags('USER')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('email')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  confirmationEmail(@Body() createUserDto: create) {
    return this.userService.confirmation(createUserDto);
  }
  @Post('login')
  @ApiResponse({
    status: 201,
    description: 'Successfully',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async login(@Body() createUserDto: login) {
    return this.userService.login(createUserDto);
  }

  @Post('confirm')
  @ApiResponse({
    status: 201,
    description: 'Successfully.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async acceptance(@Body() createUserDto: confirm) {
    return this.userService.acceptance(createUserDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'Successfully.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(BeltGuard)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'Successfully.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: update) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(BeltGuard)
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
