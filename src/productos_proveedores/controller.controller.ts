import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ProductoProveedor } from './doman/dto';
import { Service } from './service.service';

@ApiTags('productos_proveedores')
@Controller('productos_proveedores')
export class AController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo producto proveedor' })
  @ApiBody({ type: ProductoProveedor })
  @ApiResponse({ status: 201, description: 'Producto proveedor creado exitosamente.', type: ProductoProveedor })
  create(@Body() create: ProductoProveedor): ProductoProveedor {
    return this.service.create(create);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los productos proveedores' })
  @ApiResponse({ status: 200, description: 'Lista de productos proveedores', type: [ProductoProveedor] })
  findAll(): ProductoProveedor[] {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un producto proveedor por ID' })
  @ApiParam({ name: 'id', description: 'ID del producto proveedor' })
  @ApiResponse({ status: 200, description: 'Producto proveedor encontrado', type: ProductoProveedor })
  @ApiResponse({ status: 404, description: 'Producto proveedor no encontrado' })
  findOne(@Param('id') id: number): ProductoProveedor | undefined {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un producto proveedor' })
  @ApiParam({ name: 'id', description: 'ID del producto proveedor' })
  @ApiBody({ type: ProductoProveedor })
  @ApiResponse({ status: 200, description: 'Producto proveedor actualizado', type: ProductoProveedor })
  @ApiResponse({ status: 404, description: 'Producto proveedor no encontrado' })
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<ProductoProveedor>,
  ): ProductoProveedor | undefined {
    return this.service.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un producto proveedor' })
  @ApiParam({ name: 'id', description: 'ID del producto proveedor' })
  @ApiResponse({ status: 200, description: 'Producto proveedor eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Producto proveedor no encontrado' })
  remove(@Param('id') id: number): boolean {
    return this.service.remove(id);
  }
}
