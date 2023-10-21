import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn({
    type: 'varchar',
    length: 255,
  })
  userId: string;

  @Column('text')
  userName: string;

  @Column('text')
  @Exclude()
  password: string;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;
}
