import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/seducacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  //Finalizado el modelos Educacion y su servicio, configuramos el componente.
  edu: Educacion[]=[];
  isLogged=false;  
  constructor(private sEducacion: SEducacionService,
              private tokenService: TokenService){}
            

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }

  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(data =>{this.edu=data});
  }

  onDelete(id?: number): void {
    if (id != undefined) {
      this.sEducacion.delete(id).subscribe(data => {
        this.cargarEducacion();
      }, err=>{
        alert("No se puede eliminar el registro");
      });      
    }
  }



}
