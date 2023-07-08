import { Injectable } from '@nestjs/common';
import { Producto } from './modelos/productos';
import { InjectModel } from '@nestjs/sequelize';
import { ProductoDto } from './dto/producto-sto';

@Injectable()
export class ProductosService {

    constructor(
        @InjectModel(Producto)
        private readonly productoModel: typeof Producto,
    ) { }


    insertarProducto(dto: ProductoDto): Promise<Producto> {
        return this.productoModel.create({
            imagen: dto.imagen,
            nombre: dto.nombre,
            precio: dto.precio,
            descripcion: dto.descripcion
        })
    }

    listadoProductos(): Promise<Producto[]>{
        return this.productoModel.findAll()
    }

}
