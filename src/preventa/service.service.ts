import { Injectable } from '@nestjs/common';
import { Preventa } from './doman/dto';

@Injectable()
export class Service {
  private dto: Preventa[] = [];

  create(create: Preventa): Preventa {
    this.dto.push(create);
    return create;
  }

  findAll(): Preventa[] {
    return this.dto;
  }

  findOne(id: number): Preventa | undefined {
    return this.dto.find((create) => create.idPreventa === id);
  }

  update(id: number, updateData: Partial<Preventa>): Preventa | undefined {
    const ZIndex = this.dto.findIndex(
      (almuerzo) => almuerzo.idPreventa === id,
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
    const index = this.dto.findIndex((almuerzo) => almuerzo.idPreventa === id);
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
