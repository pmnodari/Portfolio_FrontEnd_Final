export class Persona {
    id?: number;
    nombre:string;
    apellido: string;
    profecion: string;
    descripcion: string;
    img: string;

    constructor(nombre: string, apellido: string, profecion: string, descripcion: string, img: string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.profecion=profecion;
        this.descripcion=descripcion;
        this.img=img;
    }
}
/* Este sera el modelo que utilizara el servicio que se creara a continuacion */
