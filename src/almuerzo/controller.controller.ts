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
import { Almuerzo } from './doman/dto';
import { Service } from './service.service';

@ApiTags('Almuerzo')
@Controller('almuerzo')
export class AController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo almuerzo' })
  @ApiResponse({ status: 201, description: 'Almuerzo creado exitosamente', type: Almuerzo })
  create(@Body() create: Almuerzo): Almuerzo {
    return this.service.create(create);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los almuerzos' })
  @ApiResponse({ status: 200, description: 'Lista de almuerzos obtenida correctamente', type: [Almuerzo] })
  findAll(): Almuerzo[] {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un almuerzo por ID' })
  @ApiResponse({ status: 200, description: 'Almuerzo encontrado', type: Almuerzo })
  @ApiResponse({ status: 404, description: 'Almuerzo no encontrado' })
  findOne(@Param('id') id: number): Almuerzo | undefined {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un almuerzo' })
  @ApiResponse({ status: 200, description: 'Almuerzo actualizado correctamente', type: Almuerzo })
  @ApiResponse({ status: 404, description: 'Almuerzo no encontrado' })
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<Almuerzo>,
  ): Almuerzo | undefined {
    return this.service.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un almuerzo' })
  @ApiResponse({ status: 200, description: 'Almuerzo eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'Almuerzo no encontrado' })
  remove(@Param('id') id: number): boolean {
    return this.service.remove(id);
  }
}
