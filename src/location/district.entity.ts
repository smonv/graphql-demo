import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { City } from './city.entity';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Entity()
export class District {
  @Field(() => Int)
  @PrimaryColumn()
  id: number;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('text')
  slug: string;

  @Field()
  @Column('text')
  type: string;

  @Field()
  @Column('text')
  nameWithType: string;

  @ManyToOne(() => City, (city) => city.districts)
  city: City;
}
