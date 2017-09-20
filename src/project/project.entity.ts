import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { OneToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @OneToOne(type => User)
  manager: User;
}
