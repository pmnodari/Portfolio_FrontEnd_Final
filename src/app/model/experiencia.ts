export class Experiencia {
    //Replicamos el Entity que se tiene en la BDD
    id?: number;
    nombreExp: string;
    descripcionExp: string;

    constructor(nombreExp: string, descripcionExp: string){
        this.nombreExp=nombreExp;
        this.descripcionExp=descripcionExp;
    }

    
}
