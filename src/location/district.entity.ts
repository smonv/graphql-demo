import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { City } from './city.entity';

@Entity()
export class District {
  @PrimaryColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  slug: string;

  @Column('text')
  type: string;

  @Column('text')
  nameWithType: string;

  @ManyToOne(() => City, (city) => city.districts)
  city: City;
}
