import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cat } from './cat.entity';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Cat, cat => cat.owner)
  cats: Cat[];
}
