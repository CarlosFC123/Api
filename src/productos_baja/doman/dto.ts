import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('productos_baja')
export class ProductoBaja {
  @PrimaryGeneratedColumn()
  idProductoBaja: number;

  @Column()
  idProducto: number;

  @Column('date')
  feBaja: string;

  @Column({ length: 255 })
  desProducto: string;

  @Column()
  cantidadProducto: number;

  @Column()
  cantidad_baja: number;

  @Column()
  TotalCantidadP: number;
}