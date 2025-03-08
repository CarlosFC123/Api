import { Injectable } from '@nestjs/common';
import { Categoria } from './doman/dto';

@Injectable()
export class Service {
  private dto: Categoria[] = [];

  create(create: Categoria): Categoria {
    this.dto.push(create);
    return create;
  }

  findAll(): Categoria[] {
    return this.dto;
  }

  findOne(id: number): Categoria | undefined {
    return this.dto.find((create) => create.idCategoria === id);
  }

  update(id: number, updateData: Partial<Categoria>): Categoria | undefined {
    const ZIndex = this.dto.findIndex(
      (almuerzo) => almuerzo.idCategoria === id,
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
    const index = this.dto.findIndex((almuerzo) => almuerzo.idCategoria === id);
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
