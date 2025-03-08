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
import { CorteCaja } from './doman/dto';
import { Service } from './service.service';

@ApiTags('Corte de Caja')
@Controller('corte-caja')
export class AController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo corte de caja' })
  @ApiResponse({ status: 201, description: 'Corte de caja creado exitosamente', type: CorteCaja })
  create(@Body() create: CorteCaja): CorteCaja {
    return this.service.create(create);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los cortes de caja' })
  @ApiResponse({ status: 200, description: 'Lista de cortes de caja obtenida correctamente', type: [CorteCaja] })
  findAll(): CorteCaja[] {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un corte de caja por ID' })
  @ApiResponse({ status: 200, description: 'Corte de caja encontrado', type: CorteCaja })
  @ApiResponse({ status: 404, description: 'Corte de caja no encontrado' })
  findOne(@Param('id') id: number): CorteCaja | undefined {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un corte de caja' })
  @ApiResponse({ status: 200, description: 'Corte de caja actualizado correctamente', type: CorteCaja })
  @ApiResponse({ status: 404, description: 'Corte de caja no encontrado' })
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<CorteCaja>,
  ): CorteCaja | undefined {
    return this.service.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un corte de caja' })
  @ApiResponse({ status: 200, description: 'Corte de caja eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'Corte de caja no encontrado' })
  remove(@Param('id') id: number): boolean {
    return this.service.remove(id);
  }
}