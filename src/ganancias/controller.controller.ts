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
import { Ganancia } from './doman/dto';
import { Service } from './service.service';

@ApiTags('Ganancias')
@Controller('ganancias')
export class AController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva ganancia' })
  @ApiResponse({ status: 201, description: 'Ganancia creada exitosamente', type: Ganancia })
  create(@Body() create: Ganancia): Ganancia {
    return this.service.create(create);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las ganancias' })
  @ApiResponse({ status: 200, description: 'Lista de ganancias obtenida correctamente', type: [Ganancia] })
  findAll(): Ganancia[] {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una ganancia por ID' })
  @ApiResponse({ status: 200, description: 'Ganancia encontrada', type: Ganancia })
  @ApiResponse({ status: 404, description: 'Ganancia no encontrada' })
  findOne(@Param('id') id: number): Ganancia | undefined {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una ganancia' })
  @ApiResponse({ status: 200, description: 'Ganancia actualizada correctamente', type: Ganancia })
  @ApiResponse({ status: 404, description: 'Ganancia no encontrada' })
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<Ganancia>,
  ): Ganancia | undefined {
    return this.service.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una ganancia' })
  @ApiResponse({ status: 200, description: 'Ganancia eliminada correctamente' })
  @ApiResponse({ status: 404, description: 'Ganancia no encontrada' })
  remove(@Param('id') id: number): boolean {
    return this.service.remove(id);
  }
}