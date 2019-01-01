import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { District } from './district.entity';

@Entity()
export class City {
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

  @OneToMany(() => District, (district) => district.city, { cascade: true })
  districts: District[];
}
