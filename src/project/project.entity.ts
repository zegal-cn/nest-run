import { ApplicationEntity } from "./../app.entity";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { OneToOne } from "typeorm";
import { User } from "../user/user.entity";

@Entity()
export class Project extends ApplicationEntity {
  @Column({ length: 500 })
  name: string;

  @Column("text") description: string;

  @OneToOne(type => User)
  manager: User;
}
