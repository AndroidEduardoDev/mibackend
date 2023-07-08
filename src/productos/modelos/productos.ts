import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Producto extends Model {

    @Column
    nombre: string

    @Column
    precio: number

    @Column
    imagen: string

    @Column
    descripcion: string

}