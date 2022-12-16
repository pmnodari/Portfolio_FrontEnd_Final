export class Persona {
    id?: number;
    nombre:String;
    apellido: String;
    profecion: String;
    img: String;

    constructor(nombre: String, apellido: String, profecion: String, img: String){
        this.nombre=nombre;
        this.apellido=apellido;
        this.profecion=profecion;
        this.img=img;
    }
}
/* Este sera el modelo que utilizara el servicio que se creara a continuacion */
