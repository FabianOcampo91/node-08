import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  @Post(':id/review')
  async createReview(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ReviewDTO,
  ) {
    return this.ReviewsService.saveReview(id, body);
  }
}
