export class Proyecto {

    id?: number;
    nombreP: string;
    descripcionP: string;
    fecha_realizacion: string;
    img: string;

    constructor(nombreP: string, descripcionP: string, fecha_realizacion:string, img: string) {

        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.fecha_realizacion=fecha_realizacion;
        this.img = img;

    }
}
