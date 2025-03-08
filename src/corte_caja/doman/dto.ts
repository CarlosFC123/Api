import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('corte_caja')
export class CorteCaja {
  @PrimaryGeneratedColumn()
  idCorteCaja: number;

  @Column('date')
  feCorte: string;

  @Column({ type: 'enum', enum: ['Descanso 1', 'Descanso 2'] })
  turno: string;

  @Column('decimal', { precision: 10, scale: 2 })
  montoTotal: number;
}
