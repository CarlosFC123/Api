import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('desayuno')
export class Desayuno {
  @PrimaryGeneratedColumn()
  idDesayuno: number;

  @Column({ length: 255 })
  imgDesayuno: string;

  @Column({ length: 255 })
  nombreProducto: string;

  @Column({ length: 255 })
  descripcionDesayuno: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precioDesayuno: number;

  @Column()
  cantidadDesayuno: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precioTotalDesayuno: number;
}
