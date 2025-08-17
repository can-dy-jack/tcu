import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  motto: string;

  @Column()
  urls: string;

  @Column()
  avatar: string;
}
