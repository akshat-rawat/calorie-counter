import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly caloriesService: FoodService) {}

  // Create
  @Post()
  createFood(): string {
    return this.caloriesService.createFood();
  }

  // Read
  @Get()
  readFoodList(): string {
    return this.caloriesService.readFoodList();
  }

  // Update
  @Put()
  updateFood(): string {
    return this.caloriesService.updateFood();
  }

  // Delete
  @Delete()
  deleteFood(): string {
    return this.caloriesService.deleteFood();
  }
}
