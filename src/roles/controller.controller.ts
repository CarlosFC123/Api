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
import { Rol } from './doman/dto';
import { Service } from './service.service';

@ApiTags('roles')
@Controller('roles')
export class AController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo rol' })
  @ApiBody({ type: Rol })
  @ApiResponse({ status: 201, description: 'Rol creado exitosamente.', type: Rol })
  create(@Body() create: Rol): Rol {
    return this.service.create(create);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los roles' })
  @ApiResponse({ status: 200, description: 'Lista de roles', type: [Rol] })
  findAll(): Rol[] {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un rol por ID' })
  @ApiParam({ name: 'id', description: 'ID del rol' })
  @ApiResponse({ status: 200, description: 'Rol encontrado', type: Rol })
  @ApiResponse({ status: 404, description: 'Rol no encontrado' })
  findOne(@Param('id') id: number): Rol | undefined {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un rol' })
  @ApiParam({ name: 'id', description: 'ID del rol' })
  @ApiBody({ type: Rol })
  @ApiResponse({ status: 200, description: 'Rol actualizado', type: Rol })
  @ApiResponse({ status: 404, description: 'Rol no encontrado' })
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<Rol>,
  ): Rol | undefined {
    return this.service.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un rol' })
  @ApiParam({ name: 'id', description: 'ID del rol' })
  @ApiResponse({ status: 200, description: 'Rol eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Rol no encontrado' })
  remove(@Param('id') id: number): boolean {
    return this.service.remove(id);
  }
}
