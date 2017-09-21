import { BaseEntity } from "typeorm";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export class ApplicationEntity extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
}
