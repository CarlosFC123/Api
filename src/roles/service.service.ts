import { Injectable } from '@nestjs/common';
import { Rol } from './doman/dto';

@Injectable()
export class Service {
  private dto: Rol[] = [];

  create(create: Rol): Rol {
    this.dto.push(create);
    return create;
  }

  findAll(): Rol[] {
    return this.dto;
  }

  findOne(id: number): Rol | undefined {
    return this.dto.find((create) => create.idRol === id);
  }

  update(id: number, updateData: Partial<Rol>): Rol | undefined {
    const ZIndex = this.dto.findIndex(
      (almuerzo) => almuerzo.idRol === id,
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
    const index = this.dto.findIndex((almuerzo) => almuerzo.idRol === id);
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
