import { Injectable } from '@nestjs/common';
import { Desayuno } from './doman/dto';

@Injectable()
export class Service {
  private dto: Desayuno[] = [];

  create(create: Desayuno): Desayuno {
    this.dto.push(create);
    return create;
  }

  findAll(): Desayuno[] {
    return this.dto;
  }

  findOne(id: number): Desayuno | undefined {
    return this.dto.find((create) => create.idDesayuno === id);
  }

  update(id: number, updateData: Partial<Desayuno>): Desayuno | undefined {
    const ZIndex = this.dto.findIndex((almuerzo) => almuerzo.idDesayuno === id);
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
    const index = this.dto.findIndex((almuerzo) => almuerzo.idDesayuno === id);
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
