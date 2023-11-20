import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mission {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  mission_name: string;
  @Column()
  today: string;
  @Column()
  reward: string;
  @Column({
    default:
      'http://www.sanrio.com.cn/sites/default/files/05-HELLO%20KITTY.png',
  })
  icon: string;
  @Column({ default: 0 })
  is_complete: 0 | 1;
  @Column({ default: 0 })
  is_special: 0 | 1;
}
