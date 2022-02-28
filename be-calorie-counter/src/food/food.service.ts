import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodService {
  createFood(): string {
    return 'food is created';
  }

  readFoodList(): string {
    return 'food is read';
  }

  updateFood(): string {
    return 'food is updated';
  }

  deleteFood(): string {
    return 'food is deleted';
  }
}
