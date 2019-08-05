import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Owner } from './owner.entity';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Owner, owner => owner.cats)
  owner: Owner;
}
