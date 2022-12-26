export class Skill {
/* TIPS: El nombre de las variables que sean iguales que en el Backend */
    id?: number;
    nombreHS: string;
    porcentaje: number;

    constructor(nombreHS: string, porcentaje: number) {
        this.nombreHS = nombreHS;
        this.porcentaje = porcentaje;
    }
}
