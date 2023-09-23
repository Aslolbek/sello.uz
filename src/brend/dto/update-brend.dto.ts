import { PartialType } from '@nestjs/swagger';
import { CreateBrendDto } from './create-brend.dto';

export class UpdateBrendDto extends PartialType(CreateBrendDto) {}
