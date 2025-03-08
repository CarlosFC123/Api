import { Injectable } from '@nestjs/common';
import { Pago } from './doman/dto';

@Injectable()
export class Service {
  private dto: Pago[] = [];

  create(create: Pago): Pago {
    this.dto.push(create);
    return create;
  }

  findAll(): Pago[] {
    return this.dto;
  }

  findOne(id: number): Pago | undefined {
    return this.dto.find((create) => create.idPagos === id);
  }

  update(id: number, updateData: Partial<Pago>): Pago | undefined {
    const ZIndex = this.dto.findIndex(
      (almuerzo) => almuerzo.idPagos=== id,
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
    const index = this.dto.findIndex((almuerzo) => almuerzo.idPagos === id);
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
