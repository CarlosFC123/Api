import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('productos_proveedores')
export class ProductoProveedor {
  @PrimaryGeneratedColumn()
  idProductoProveedor: number;

  @Column()
  idProveedor: number;

  @Column()
  idProducto: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precio_unitario_compra: number;

  @Column()
  cantidad_anterior: number;

  @Column()
  cantidadProducto: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precioTotalCompra: number;
}
