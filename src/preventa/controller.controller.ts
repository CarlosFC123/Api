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
import { Preventa } from './doman/dto';
import { Service } from './service.service';

@ApiTags('Preventa')
@Controller('preventa')
export class AController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva preventa' })
  @ApiResponse({ status: 201, description: 'Preventa creada exitosamente', type: Preventa })
  create(@Body() create: Preventa): Preventa {
    return this.service.create(create);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las preventas' })
  @ApiResponse({ status: 200, description: 'Lista de preventas obtenida correctamente', type: [Preventa] })
  findAll(): Preventa[] {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una preventa por ID' })
  @ApiResponse({ status: 200, description: 'Preventa encontrada', type: Preventa })
  @ApiResponse({ status: 404, description: 'Preventa no encontrada' })
  findOne(@Param('id') id: number): Preventa | undefined {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una preventa' })
  @ApiResponse({ status: 200, description: 'Preventa actualizada correctamente', type: Preventa })
  @ApiResponse({ status: 404, description: 'Preventa no encontrada' })
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<Preventa>,
  ): Preventa | undefined {
    return this.service.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una preventa' })
  @ApiResponse({ status: 200, description: 'Preventa eliminada correctamente' })
  @ApiResponse({ status: 404, description: 'Preventa no encontrada' })
  remove(@Param('id') id: number): boolean {
    return this.service.remove(id);
  }
}