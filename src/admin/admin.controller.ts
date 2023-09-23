import { Controller, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ADMIN')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Post('login')
  login(@Body() createOrderDto: CreateAdminDto) {
    return this.adminService.login(createOrderDto);
  }
}
