import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/sproyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  //Variables
  proyecto: Proyecto[]=[];
  isLogged=false;

  constructor(private sProyecto: SProyectoService,
              private tokenService: TokenService) { }

  ngOnInit() {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
        this.isLogged=true;
    } else {
      this.isLogged=false;
    }

  }
  //Cargar proyecto
  cargarProyecto(): void {
    this.sProyecto.lista().subscribe(data=>{
      this.proyecto = data;
    });  
  }

  //Borrar proyecto
  onDelete(id?: number): void {
    if (id != undefined) {
      this.sProyecto.delete(id).subscribe(data=>{
        this.cargarProyecto();
      }, err=>{
        alert("No se pudo eliminar el proyecto");
      })
    };
  }

}
