import { PartialType } from '@nestjs/mapped-types';
import { CreateCatagoryDto } from './create-catagory.dto';

export class UpdateCatagoryDto extends PartialType(CreateCatagoryDto) {}
