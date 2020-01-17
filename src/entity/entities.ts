import { Column, PrimaryGeneratedColumn, Entity, BaseEntity, ManyToOne } from "typeorm";
import { Lazy } from '../helpers';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Asset, { lazy: true, nullable: true })
  avatar?: Lazy<Asset>;
}

@Entity()
export class Asset extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

@Entity()
export class Organization extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, {lazy: true})
  owner: Lazy<User>;
}