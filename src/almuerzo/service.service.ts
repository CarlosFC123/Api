import { Injectable } from '@nestjs/common';
import { Almuerzo } from './doman/dto';

@Injectable()
export class Service {
  private dto: Almuerzo[] = [];

  create(create: Almuerzo): Almuerzo {
    this.dto.push(create);
    return create;
  }

  findAll(): Almuerzo[] {
    return this.dto;
  }

  findOne(id: number): Almuerzo | undefined {
    return this.dto.find((create) => create.idAlmuerzo === id);
  }

  update(id: number, updateData: Partial<Almuerzo>): Almuerzo | undefined {
    const ZIndex = this.dto.findIndex(
      (almuerzo) => almuerzo.idAlmuerzo === id,
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
    const index = this.dto.findIndex(
      (almuerzo) => almuerzo.idAlmuerzo === id,
    );
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
