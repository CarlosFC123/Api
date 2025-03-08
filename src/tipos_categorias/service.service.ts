import { Injectable } from '@nestjs/common';
import { TipoCategoria } from './doman/dto';

@Injectable()
export class Service {
  private dto: TipoCategoria[] = [];

  create(create: TipoCategoria): TipoCategoria {
    this.dto.push(create);
    return create;
  }

  findAll(): TipoCategoria[] {
    return this.dto;
  }

  findOne(id: number): TipoCategoria | undefined {
    return this.dto.find((create) => create.idTipo === id);
  }

  update(
    id: number,
    updateData: Partial<TipoCategoria>,
  ): TipoCategoria | undefined {
    const ZIndex = this.dto.findIndex((almuerzo) => almuerzo.idTipo === id);
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
    const index = this.dto.findIndex((almuerzo) => almuerzo.idTipo === id);
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
