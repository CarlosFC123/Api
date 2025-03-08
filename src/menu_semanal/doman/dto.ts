import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('menu_semanal')
export class MenuSemanal {
  @PrimaryGeneratedColumn()
  idMenuSemanal: number;

  @Column('date')
  feInicioM: string;

  @Column({ length: 255 })
  nombreDesayuno: string;

  @Column({ length: 255 })
  nombreAlmuerzo: string;

  @Column({ length: 10 })
  dia_semana: string;
}
