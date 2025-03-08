import { Injectable } from '@nestjs/common';
import { MenuSemanal } from './doman/dto';

@Injectable()
export class Service {
  private dto: MenuSemanal[] = [];

  create(create: MenuSemanal): MenuSemanal {
    this.dto.push(create);
    return create;
  }

  findAll(): MenuSemanal[] {
    return this.dto;
  }

  findOne(id: number): MenuSemanal | undefined {
    return this.dto.find((create) => create.idMenuSemanal === id);
  }

  update(
    id: number,
    updateData: Partial<MenuSemanal>,
  ): MenuSemanal | undefined {
    const ZIndex = this.dto.findIndex(
      (almuerzo) => almuerzo.idMenuSemanal === id,
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
      (almuerzo) => almuerzo.idMenuSemanal === id,
    );
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
