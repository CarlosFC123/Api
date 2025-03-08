import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { TipoCategoria } from './doman/dto';
import { Service } from './service.service';

@ApiTags('tipos_categorias')
@Controller('tipos_categorias')
export class AController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo tipo de categoría' })
  @ApiBody({ type: TipoCategoria })
  @ApiResponse({ status: 201, description: 'Tipo de categoría creado exitosamente.', type: TipoCategoria })
  create(@Body() create: TipoCategoria): TipoCategoria {
    return this.service.create(create);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los tipos de categorías' })
  @ApiResponse({ status: 200, description: 'Lista de tipos de categorías', type: [TipoCategoria] })
  findAll(): TipoCategoria[] {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un tipo de categoría por ID' })
  @ApiParam({ name: 'id', description: 'ID del tipo de categoría' })
  @ApiResponse({ status: 200, description: 'Tipo de categoría encontrado', type: TipoCategoria })
  @ApiResponse({ status: 404, description: 'Tipo de categoría no encontrado' })
  findOne(@Param('id') id: number): TipoCategoria | undefined {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un tipo de categoría' })
  @ApiParam({ name: 'id', description: 'ID del tipo de categoría' })
  @ApiBody({ type: TipoCategoria })
  @ApiResponse({ status: 200, description: 'Tipo de categoría actualizado', type: TipoCategoria })
  @ApiResponse({ status: 404, description: 'Tipo de categoría no encontrado' })
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<TipoCategoria>,
  ): TipoCategoria | undefined {
    return this.service.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un tipo de categoría' })
  @ApiParam({ name: 'id', description: 'ID del tipo de categoría' })
  @ApiResponse({ status: 200, description: 'Tipo de categoría eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Tipo de categoría no encontrado' })
  remove(@Param('id') id: number): boolean {
    return this.service.remove(id);
  }
}
