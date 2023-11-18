import { UseInterceptors } from '@nestjs/common';
import { TransformInterceptor } from '../intercept';

@UseInterceptors(TransformInterceptor)
export class BaseController {}
