import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Icon {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  data: string;
}
