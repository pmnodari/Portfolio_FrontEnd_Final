export class Persona {
    id?: number;
    nombre:String;
    apellido: String;
    profecion: String;
    descripcion: String
    img: String;

    constructor(nombre: String, apellido: String, profecion: String, descripcion: String, img: String){
        this.nombre=nombre;
        this.apellido=apellido;
        this.profecion=profecion;
        this.descripcion=descripcion;
        this.img=img;
    }
}
/* Este sera el modelo que utilizara el servicio que se creara a continuacion */
