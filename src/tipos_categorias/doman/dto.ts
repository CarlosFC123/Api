import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipos_categorias')
export class TipoCategoria {
  @PrimaryGeneratedColumn()
  idTipo: number;

  @Column({ length: 50 })
  nbTipo: string;
}
