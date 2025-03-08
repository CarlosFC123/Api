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
import { Desayuno } from './doman/dto';
import { Service } from './service.service';

@ApiTags('Desayuno')
@Controller('desayuno')
export class AController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo desayuno' })
  @ApiResponse({ status: 201, description: 'Desayuno creado exitosamente', type: Desayuno })
  create(@Body() create: Desayuno): Desayuno {
    return this.service.create(create);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los desayunos' })
  @ApiResponse({ status: 200, description: 'Lista de desayunos obtenida correctamente', type: [Desayuno] })
  findAll(): Desayuno[] {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un desayuno por ID' })
  @ApiResponse({ status: 200, description: 'Desayuno encontrado', type: Desayuno })
  @ApiResponse({ status: 404, description: 'Desayuno no encontrado' })
  findOne(@Param('id') id: number): Desayuno | undefined {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un desayuno' })
  @ApiResponse({ status: 200, description: 'Desayuno actualizado correctamente', type: Desayuno })
  @ApiResponse({ status: 404, description: 'Desayuno no encontrado' })
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<Desayuno>,
  ): Desayuno | undefined {
    return this.service.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un desayuno' })
  @ApiResponse({ status: 200, description: 'Desayuno eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'Desayuno no encontrado' })
  remove(@Param('id') id: number): boolean {
    return this.service.remove(id);
  }
}