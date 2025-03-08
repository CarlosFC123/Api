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
import { Proveedor } from './doman/dto';
import { Service } from './service.service';

@ApiTags('proveedores')
@Controller('proveedores')
export class AController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo proveedor' })
  @ApiBody({ type: Proveedor })
  @ApiResponse({ status: 201, description: 'Proveedor creado exitosamente.', type: Proveedor })
  create(@Body() create: Proveedor): Proveedor {
    return this.service.create(create);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los proveedores' })
  @ApiResponse({ status: 200, description: 'Lista de proveedores', type: [Proveedor] })
  findAll(): Proveedor[] {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un proveedor por ID' })
  @ApiParam({ name: 'id', description: 'ID del proveedor' })
  @ApiResponse({ status: 200, description: 'Proveedor encontrado', type: Proveedor })
  @ApiResponse({ status: 404, description: 'Proveedor no encontrado' })
  findOne(@Param('id') id: number): Proveedor | undefined {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un proveedor' })
  @ApiParam({ name: 'id', description: 'ID del proveedor' })
  @ApiBody({ type: Proveedor })
  @ApiResponse({ status: 200, description: 'Proveedor actualizado', type: Proveedor })
  @ApiResponse({ status: 404, description: 'Proveedor no encontrado' })
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<Proveedor>,
  ): Proveedor | undefined {
    return this.service.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un proveedor' })
  @ApiParam({ name: 'id', description: 'ID del proveedor' })
  @ApiResponse({ status: 200, description: 'Proveedor eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Proveedor no encontrado' })
  remove(@Param('id') id: number): boolean {
    return this.service.remove(id);
  }
}
