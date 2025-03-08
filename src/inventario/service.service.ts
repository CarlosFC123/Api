import { Injectable } from '@nestjs/common';
import { Inventario } from './doman/dto';

@Injectable()
export class Service {
  private dto: Inventario[] = [];

  create(create: Inventario): Inventario {
    this.dto.push(create);
    return create;
  }

  findAll(): Inventario[] {
    return this.dto;
  }

  findOne(id: number): Inventario | undefined {
    return this.dto.find((create) => create.idInventario === id);
  }

  update(id: number, updateData: Partial<Inventario>): Inventario | undefined {
    const ZIndex = this.dto.findIndex(
      (almuerzo) => almuerzo.idInventario === id,
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
    const index = this.dto.findIndex((almuerzo) => almuerzo.idInventario === id);
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
