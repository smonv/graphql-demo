import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { District } from './district.entity';
import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
@Entity()
export class City {
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

  @Field(() => [District])
  @OneToMany(() => District, (district) => district.city, { cascade: true })
  districts: District[];
}
