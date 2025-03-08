import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('preventa')
export class Preventa {
  @PrimaryGeneratedColumn()
  idPreventa: number;

  @Column({ length: 255 })
  nombrePreventa: string;

  @Column()
  cantidad_orden: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precioUnitarioPreventa: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precioTotalpreventa: number;

  @Column({ type: 'enum', enum: ['Efectivo', 'Transferencia'] })
  metodoPago: string;
}