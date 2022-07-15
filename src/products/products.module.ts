import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Review } from '../reviews/entities/review.entity';
import { ReviewsController } from 'src/reviews/reviews.controller';
import { ReviewsService } from 'src/reviews/reviews.service';
import { Size } from 'src/size/entities/size.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Review, Size])],
  controllers: [ProductsController, ReviewsController],
  providers: [ProductsService, ReviewsService],
})
export class ProductsModule {}
