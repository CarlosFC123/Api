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
import { Pago } from './doman/dto';
import { Service } from './service.service';

@ApiTags('Pagos')
@Controller('pagos')
export class AController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo pago' })
  @ApiResponse({ status: 201, description: 'Pago creado exitosamente', type: Pago })
  create(@Body() create: Pago): Pago {
    return this.service.create(create);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los pagos' })
  @ApiResponse({ status: 200, description: 'Lista de pagos obtenida correctamente', type: [Pago] })
  findAll(): Pago[] {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un pago por ID' })
  @ApiResponse({ status: 200, description: 'Pago encontrado', type: Pago })
  @ApiResponse({ status: 404, description: 'Pago no encontrado' })
  findOne(@Param('id') id: number): Pago | undefined {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un pago' })
  @ApiResponse({ status: 200, description: 'Pago actualizado correctamente', type: Pago })
  @ApiResponse({ status: 404, description: 'Pago no encontrado' })
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<Pago>,
  ): Pago | undefined {
    return this.service.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un pago' })
  @ApiResponse({ status: 200, description: 'Pago eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'Pago no encontrado' })
  remove(@Param('id') id: number): boolean {
    return this.service.remove(id);
  }
}