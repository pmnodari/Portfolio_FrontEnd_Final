import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  //Este componente es para cuando se redireccione, para editar la experiencia
  //"strictNullChecks": false, colocar esta propiedad en tsconfig.json
  expe: Experiencia=null;

  constructor(
      private sExperiencia: SExperienciaService,  
      private activateRoute: ActivatedRoute,
      private router: Router
  ){}

  ngOnInit(): void {
    //Capturamos el id de la experiencia a modificar
    const id=this.activateRoute.snapshot.params['id'];

    this.sExperiencia.detail(id).subscribe(data=>{
      this.expe=data;
    }, err=>{
      alert("Error al acceder a la actualización");
      this.router.navigate(['']);
      }
    );
  }

  //Creamos metodo
  onUpdate():void{
    //Obtenemos id de la experiencia
    const id=this.activateRoute.snapshot.params['id'];
    //Implementamos metodos
    this.sExperiencia.update(id, this.expe).subscribe(data=>{
      this.router.navigate(['']);
    }, err=>{
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    }
    );
  }


}
