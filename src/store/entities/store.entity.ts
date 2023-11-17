import { Column, Entity } from "typeorm";

@Entity()
export class Store {
  @Column()
  id: string;
  @Column()
  goods: string;
  @Column()
  rewards: number;
  @Column()
  icon: string;
  @Column()
  description: string;
  @Column()
  del_flag: number;
}
