import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Producto } from './modelos/productos';

@Module({
  imports: [SequelizeModule.forFeature([Producto])],
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
