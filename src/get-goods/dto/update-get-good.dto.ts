import { PartialType } from '@nestjs/mapped-types';
import { CreateGetGoodDto } from './create-get-good.dto';

export class UpdateGetGoodDto extends PartialType(CreateGetGoodDto) {}
