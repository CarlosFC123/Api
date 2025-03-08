import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('proveedores')
export class Proveedor {
  @PrimaryGeneratedColumn()
  idProveedor: number;

  @Column({ length: 100 })
  nbProveedor: string;

  @Column({ length: 15 })
  numTelefono: string;

  @Column({ length: 100 })
  desMarca: string;
}