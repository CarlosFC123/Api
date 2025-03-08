import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('ganancias')
export class Ganancia {
  @PrimaryGeneratedColumn()
  idGanancias: number;

  @Column('date')
  feInicioG: string;

  @Column('date')
  feFinalG: string;

  @Column({ type: 'enum', enum: ['Diario', 'Semanal', 'Mensual', 'Anual'] })
  tipoPeriodo: string;

  @Column('decimal', { precision: 10, scale: 2 })
  capital_Inicial: number;

  @Column('decimal', { precision: 10, scale: 2 })
  ingresos: number;

  @Column('decimal', { precision: 10, scale: 2 })
  totalGanancias: number;
}