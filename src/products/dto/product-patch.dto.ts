import { PartialType } from '@nestjs/mapped-types';
import { ProductDTO } from './product.dto';

export class ProductPatchDto extends PartialType(ProductDTO) {}
