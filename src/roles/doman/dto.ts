import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('roles')
export class Rol {
  @PrimaryGeneratedColumn()
  idRol: number;

  @Column({ length: 50 })
  nombreRol: string;
}