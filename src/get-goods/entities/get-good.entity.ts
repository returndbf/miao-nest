import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class GetGoods {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  goods_id: string;
  @Column()
  today: string;
  @Column()
  is_get: 0 | 1;
}
