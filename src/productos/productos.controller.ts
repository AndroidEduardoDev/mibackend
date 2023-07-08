import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './modelos/productos';
import { ProductoDto } from './dto/producto-sto';

@Controller('productos')
export class ProductosController {

    constructor(private service: ProductosService) { }

    @Get()
    devolverTodosLosProductos(): Promise<Producto[]> {
        return this.service.listadoProductos()
    }

    @Post()
    insertarProducto(@Body() dto: ProductoDto) {
        return this.service.insertarProducto(dto)
    }

}
