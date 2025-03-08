import { Injectable } from '@nestjs/common';
import { Producto } from './doman/dto';

@Injectable()
export class Service {
  private dto: Producto[] = [];

  create(create: Producto): Producto {
    this.dto.push(create);
    return create;
  }

  findAll(): Producto[] {
    return this.dto;
  }

  findOne(id: number): Producto | undefined {
    return this.dto.find((create) => create.idProducto === id);
  }

  update(id: number, updateData: Partial<Producto>): Producto | undefined {
    const ZIndex = this.dto.findIndex(
      (almuerzo) => almuerzo.idProducto === id,
    );
    if (ZIndex !== -1) {
      this.dto[ZIndex] = {
        ...this.dto[ZIndex],
        ...updateData,
      };
      return this.dto[ZIndex];
    }
    return undefined;
  }

  remove(id: number): boolean {
    const index = this.dto.findIndex((almuerzo) => almuerzo.idProducto === id);
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
