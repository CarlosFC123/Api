import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('pagos')
export class Pago {
  @PrimaryGeneratedColumn()
  idPagos: number;

  @Column({ length: 255 })
  nombrePagos: string;

  @Column('decimal', { precision: 10, scale: 2 })
  canTotalP: number;
}