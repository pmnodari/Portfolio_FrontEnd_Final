export class Persona {
    id?: number;
    nombre:String;
    apellido: String;
    img: String;

    constructor(nombre: String, apellido: String, img: String){
        this.nombre=nombre;
        this.apellido=apellido;
        this.img=img;
    }
}
/* Este sera el modelo que utilizara el servicio que se creara a continuacion */
