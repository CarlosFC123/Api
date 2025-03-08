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
import { ProductoBaja } from './doman/dto';
import { Service } from './service.service';

@ApiTags('productos_baja')
@Controller('productos_baja')
export class AController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo producto en baja' })
  @ApiBody({ type: ProductoBaja })
  @ApiResponse({ status: 201, description: 'Producto en baja creado exitosamente.', type: ProductoBaja })
  create(@Body() create: ProductoBaja): ProductoBaja {
    return this.service.create(create);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los productos en baja' })
  @ApiResponse({ status: 200, description: 'Lista de productos en baja', type: [ProductoBaja] })
  findAll(): ProductoBaja[] {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un producto en baja por ID' })
  @ApiParam({ name: 'id', description: 'ID del producto en baja' })
  @ApiResponse({ status: 200, description: 'Producto en baja encontrado', type: ProductoBaja })
  @ApiResponse({ status: 404, description: 'Producto en baja no encontrado' })
  findOne(@Param('id') id: number): ProductoBaja | undefined {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un producto en baja' })
  @ApiParam({ name: 'id', description: 'ID del producto en baja' })
  @ApiBody({ type: ProductoBaja })
  @ApiResponse({ status: 200, description: 'Producto en baja actualizado', type: ProductoBaja })
  @ApiResponse({ status: 404, description: 'Producto en baja no encontrado' })
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<ProductoBaja>,
  ): ProductoBaja | undefined {
    return this.service.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un producto en baja' })
  @ApiParam({ name: 'id', description: 'ID del producto en baja' })
  @ApiResponse({ status: 200, description: 'Producto en baja eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Producto en baja no encontrado' })
  remove(@Param('id') id: number): boolean {
    return this.service.remove(id);
  }
}
