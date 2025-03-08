import { 
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Inventario } from './doman/dto';
import { Service } from './service.service';

@ApiTags('Inventario')
@Controller('inventario')
export class AController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo inventario' })
  @ApiResponse({ status: 201, description: 'Inventario creado exitosamente', type: Inventario })
  create(@Body() create: Inventario): Inventario {
    return this.service.create(create);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los inventarios' })
  @ApiResponse({ status: 200, description: 'Lista de inventarios obtenida correctamente', type: [Inventario] })
  findAll(): Inventario[] {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un inventario por ID' })
  @ApiResponse({ status: 200, description: 'Inventario encontrado', type: Inventario })
  @ApiResponse({ status: 404, description: 'Inventario no encontrado' })
  findOne(@Param('id') id: number): Inventario | undefined {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un inventario' })
  @ApiResponse({ status: 200, description: 'Inventario actualizado correctamente', type: Inventario })
  @ApiResponse({ status: 404, description: 'Inventario no encontrado' })
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<Inventario>,
  ): Inventario | undefined {
    return this.service.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un inventario' })
  @ApiResponse({ status: 200, description: 'Inventario eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'Inventario no encontrado' })
  remove(@Param('id') id: number): boolean {
    return this.service.remove(id);
  }
}