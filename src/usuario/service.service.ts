import { Injectable } from '@nestjs/common';
import { Usuario } from './doman/dto';

@Injectable()
export class Service {
  private dto: Usuario[] = [];

  create(create: Usuario): Usuario {
    this.dto.push(create);
    return create;
  }

  findAll(): Usuario[] {
    return this.dto;
  }

  findOne(id: number): Usuario | undefined {
    return this.dto.find((create) => create.idUsuario === id);
  }

  update(id: number, updateData: Partial<Usuario>): Usuario | undefined {
    const ZIndex = this.dto.findIndex(
      (almuerzo) => almuerzo.idUsuario === id,
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
    const index = this.dto.findIndex((almuerzo) => almuerzo.idUsuario === id);
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
