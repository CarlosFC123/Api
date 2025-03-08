import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity('almuerzo')
export class Almuerzo {
  @PrimaryGeneratedColumn()
  idAlmuerzo: number;

  @Column({ length: 255 })
  imgAlmuerzo: string;

  @Column({ length: 255 })
  nombreProducto: string;

  @Column({ length: 255 })
  descripcionAlmuerzo: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precioPorcion: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precioMedia: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precioOrden: number;

  @Column()
  cantidadPorcion: number;

  @Column()
  cantidadMedia: number;

  @Column()
  cantidadOrden: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precioTotalAlmuerzo: number;
}
