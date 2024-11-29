import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
constructor() {
    this.id = 0;
    this.email = ''; 
    this.password = ''; 
    }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}