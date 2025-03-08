import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('inventario')
export class Inventario {
  @PrimaryGeneratedColumn()
  idInventario: number;

  @Column()
  idProducto: number;

  @Column()
  canActual: number;
}