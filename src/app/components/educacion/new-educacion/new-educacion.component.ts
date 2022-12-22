import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/seducacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  nombreEdu="";
  descripcionEdu="";

  constructor(private sEducacion: SEducacionService,
              private router: Router) { }

  ngOnInit() {
  }

  //Creo el registro
  onCreate(): void {

    const edu=new Educacion(this.nombreEdu, this.descripcionEdu);

    this.sEducacion.save(edu).subscribe(data=>{
      alert("Fomación añadida");
      //Volvemos al home 
      this.router.navigate(['']);
  }, err=>{
    alert("Falló el registro");
    //Volvemos al home 
    this.router.navigate(['']);
    });
  }
}
