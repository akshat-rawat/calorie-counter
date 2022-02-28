import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('food')
export default class FoodEntity extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column() userId: number;
  @Column({ type: 'double' }) calorie: number;
  @Column({ type: 'double' }) price: number;
  @Column() date: string;
  @Column() name: string;
}
