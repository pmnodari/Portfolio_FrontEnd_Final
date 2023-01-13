export class Educacion {

    id?: number;
    nombreEdu: string;
    descripcionEdu: string;
    fecha_fin: string;
    fecha_inicio: string;

    constructor(nombreEdu: string, descripcionEdu: string, fecha_fin: string, fecha_inicio: string){
        this.nombreEdu = nombreEdu;
        this.descripcionEdu = descripcionEdu;
        this.fecha_fin=fecha_fin;
        this.fecha_inicio=fecha_inicio;
    }
}
