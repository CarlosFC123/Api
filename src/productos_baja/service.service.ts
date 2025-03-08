import { Injectable } from '@nestjs/common';
import { ProductoBaja } from './doman/dto';

@Injectable()
export class Service {
  private dto: ProductoBaja[] = [];

  create(create: ProductoBaja): ProductoBaja {
    this.dto.push(create);
    return create;
  }

  findAll(): ProductoBaja[] {
    return this.dto;
  }

  findOne(id: number): ProductoBaja | undefined {
    return this.dto.find((create) => create.idProductoBaja === id);
  }

  update(id: number, updateData: Partial<ProductoBaja>): ProductoBaja | undefined {
    const ZIndex = this.dto.findIndex(
      (almuerzo) => almuerzo.idProductoBaja === id,
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
    const index = this.dto.findIndex((almuerzo) => almuerzo.idProductoBaja === id);
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
