import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column({ length: 100 })
  nbUsuario: string;

  @Column({ length: 100 })
  apellidoUsuario: string;

  @Column({ length: 15 })
  numTelefonoU: string;

  @Column({ length: 225 })
  pwdContraseña: string;

  @Column()
  idRol: number;

  @Column({ length: 225 })
  email: string;
}