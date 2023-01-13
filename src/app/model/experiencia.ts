export class Experiencia {
    //Replicamos el Entity que se tiene en la BDD
    id?: number;
    nombreExp: string;
    descripcionExp: string;
    fecha_fin: string;
    fecha_inicio: string;

    constructor(nombreExp: string, descripcionExp: string, fecha_fin: string, fecha_inicio: string){
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;
        this.fecha_fin=fecha_fin;
        this.fecha_inicio=fecha_inicio;
    }

    
}
