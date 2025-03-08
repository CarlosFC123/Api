import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  idProducto: number;

  @Column()
  idCategoria: number;

  @Column()
  idTipo: number;

  @Column()
  idProveedor: number;

  @Column({ length: 100 })
  nbProducto: string;

  @Column('text')
  desProducto: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precioProducto: number;

  @Column({ length: 255 })
  imgProducto: string;

  @Column()
  destacado: boolean;

  @Column({ length: 50 })
  código_barras: string;
}