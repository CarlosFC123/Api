import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { UsuarioModule } from './usuario/usuario.module';
import { TiposCategoriasModule } from './tipos_categorias/tipos_categorias.module';
import { RolesModule } from './roles/roles.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ProductosProveedoresModule } from './productos_proveedores/productos_proveedores.module';
import { ProductosBajaModule } from './productos_baja/productos_baja.module';
import { ProductosModule } from './productos/productos.module';
import { PreventaModule } from './preventa/preventa.module';
import { PagosModule } from './pagos/pagos.module';
import { MenuSemanalModule } from './menu_semanal/menu_semanal.module';
import { InventarioModule } from './inventario/inventario.module';
import { GananciasModule } from './ganancias/ganancias.module';
import { DesayunoModule } from './desayuno/desayuno.module';
import { CorteCajaModule } from './corte_caja/corte_caja.module';
import { CategoríasModule } from './categorías/categorías.module';
import { AlmuerzoModule } from './almuerzo/almuerzo.module';
import { Usuario } from './usuario/doman/dto';
import { TipoCategoria } from './tipos_categorias/doman/dto';
import { Rol } from './roles/doman/dto';
import { Proveedor } from './proveedores/doman/dto';
import { Producto } from './productos/doman/dto';
import { ProductoBaja } from './productos_baja/doman/dto';
import { ProductoProveedor } from './productos_proveedores/doman/dto';
import { Preventa } from './preventa/doman/dto';
import { Pago } from './pagos/doman/dto';
import { MenuSemanal } from './menu_semanal/doman/dto';
import { Inventario } from './inventario/doman/dto';
import { Ganancia } from './ganancias/doman/dto';
import { Desayuno } from './desayuno/doman/dto';
import { CorteCaja } from './corte_caja/doman/dto';
import { Categoria } from './categorías/doman/dto';
import { Almuerzo } from './almuerzo/doman/dto';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        Usuario,
        TipoCategoria,
        Rol,
        Proveedor,
        Producto,
        ProductoBaja,
        ProductoProveedor,
        Preventa,
        Pago,
        MenuSemanal,
        Inventario,
        Ganancia,
        Desayuno,
        CorteCaja,
        Categoria,
        Almuerzo
      ],
      synchronize: true,
    }),
    UsuarioModule,
    TiposCategoriasModule,
    RolesModule,
    ProveedoresModule,
    ProductosProveedoresModule,
    ProductosBajaModule,
    ProductosModule,
    PreventaModule,
    PagosModule,
    MenuSemanalModule,
    InventarioModule,
    GananciasModule,
    DesayunoModule,
    CorteCajaModule,
    CategoríasModule,
    AlmuerzoModule,
  ],
})
export class AppModule {}