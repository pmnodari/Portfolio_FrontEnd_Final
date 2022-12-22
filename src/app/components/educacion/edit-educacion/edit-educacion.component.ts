import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/seducacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  edu: Educacion=null;

  constructor(
    private sEducacion: SEducacionService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //Capturamos el id de la experiencia a modificar
    const id=this.activateRoute.snapshot.params['id'];

    this.sEducacion.detail(id).subscribe(data=>{
      this.edu=data;
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
      this.sEducacion.update(id, this.edu).subscribe(data=>{
        this.router.navigate(['']);
      }, err=>{
        alert("Error al modificar educación");
        this.router.navigate(['']);
      }
      );
    }


}
