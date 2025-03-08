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
import { MenuSemanal } from './doman/dto';
import { Service } from './service.service';

@ApiTags('Menú Semanal')
@Controller('menu_semanal')
export class AController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo menú semanal' })
  @ApiResponse({ status: 201, description: 'Menú semanal creado exitosamente', type: MenuSemanal })
  create(@Body() create: MenuSemanal): MenuSemanal {
    return this.service.create(create);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los menús semanales' })
  @ApiResponse({ status: 200, description: 'Lista de menús semanales obtenida correctamente', type: [MenuSemanal] })
  findAll(): MenuSemanal[] {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un menú semanal por ID' })
  @ApiResponse({ status: 200, description: 'Menú semanal encontrado', type: MenuSemanal })
  @ApiResponse({ status: 404, description: 'Menú semanal no encontrado' })
  findOne(@Param('id') id: number): MenuSemanal | undefined {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un menú semanal' })
  @ApiResponse({ status: 200, description: 'Menú semanal actualizado correctamente', type: MenuSemanal })
  @ApiResponse({ status: 404, description: 'Menú semanal no encontrado' })
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<MenuSemanal>,
  ): MenuSemanal | undefined {
    return this.service.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un menú semanal' })
  @ApiResponse({ status: 200, description: 'Menú semanal eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'Menú semanal no encontrado' })
  remove(@Param('id') id: number): boolean {
    return this.service.remove(id);
  }
}
