import { Injectable } from '@nestjs/common';
import { ProductoProveedor } from './doman/dto';

@Injectable()
export class Service {
  private dto: ProductoProveedor[] = [];

  create(create: ProductoProveedor): ProductoProveedor {
    this.dto.push(create);
    return create;
  }

  findAll(): ProductoProveedor[] {
    return this.dto;
  }

  findOne(id: number): ProductoProveedor | undefined {
    return this.dto.find((create) => create.idProductoProveedor === id);
  }

  update(id: number, updateData: Partial<ProductoProveedor>): ProductoProveedor | undefined {
    const ZIndex = this.dto.findIndex(
      (almuerzo) => almuerzo.idProductoProveedor === id,
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
    const index = this.dto.findIndex((almuerzo) => almuerzo.idProductoProveedor === id);
    if (index !== -1) {
      this.dto.splice(index, 1);
      return true;
    }
    return false;
  }
}
