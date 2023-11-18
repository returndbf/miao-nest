import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  goods: string;
  @Column()
  reward: number;
  @Column({ nullable: false })
  icon: string;
  @Column()
  description: string;
  @Column()
  del_flag: number;
}
