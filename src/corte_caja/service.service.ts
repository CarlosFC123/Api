import { Injectable } from '@nestjs/common';
import { CorteCaja } from './doman/dto';

@Injectable()
export class Service {
  private dto: CorteCaja[] = [];

  create(create: CorteCaja): CorteCaja {
    this.dto.push(create);
    return create;
  }

  findAll(): CorteCaja[] {
    return this.dto;
  }

  findOne(id: number): CorteCaja | undefined {
    return this.dto.find((create) => create.idCorteCaja === id);
  }

  update(id: number, updateData: Partial<CorteCaja>): CorteCaja | undefined {
    const ZIndex = this.dto.findIndex(
      (almuerzo) => almuerzo.idCorteCaja === id,
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
    const index = this.dto.findIndex((almuerzo) => almuerzo.idCorteCaja === id);
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
