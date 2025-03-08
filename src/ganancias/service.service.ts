import { Injectable } from '@nestjs/common';
import { Ganancia } from './doman/dto';

@Injectable()
export class Service {
  private dto: Ganancia[] = [];

  create(create: Ganancia): Ganancia {
    this.dto.push(create);
    return create;
  }

  findAll(): Ganancia[] {
    return this.dto;
  }

  findOne(id: number): Ganancia | undefined {
    return this.dto.find((create) => create.idGanancias === id);
  }

  update(id: number, updateData: Partial<Ganancia>): Ganancia | undefined {
    const ZIndex = this.dto.findIndex(
      (almuerzo) => almuerzo.idGanancias === id,
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
    const index = this.dto.findIndex((almuerzo) => almuerzo.idGanancias === id);
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
