import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  //Creamos un array para guardar las experiencias
  expe: Experiencia[] =[];

  //Se agrega el servicio experiencia, y el del token (depende del logueo son la cosas que pueden hacer)
  constructor(private sExperiencia: SExperienciaService, 
              private tokenService: TokenService){}
  
  //Variable auxiliar            
  isLogged=false;

  ngOnInit(): void {
    //Cargamos la experiencia previamente
    this.cargarExperiencia();
    //Validamos si se esta logueado o no
    if (this.tokenService.getToken()) {
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }
  //Metodo Cargar experiencia
  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data=>{this.expe=data});
}

  onDelete(id?: number): void{
    if (id !=undefined) {
      this.sExperiencia.delete(id).subscribe(data=>{
        //Volver a cargar la lista, pero sin la expe eliminada
        this.cargarExperiencia();
      }, err=>{
        alert("No se pudo eliminar el registro")
      }
      );
      
    }
}

}


