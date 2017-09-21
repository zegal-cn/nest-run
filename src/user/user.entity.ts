import { ApplicationEntity } from "./../app.entity";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends ApplicationEntity {
  @Column({ length: 500 })
  name: string;

  @Column("text") description: string;
}
