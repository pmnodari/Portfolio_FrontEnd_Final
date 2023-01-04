import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { SProyectoService } from 'src/app/service/sproyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proyecto: Proyecto=null;

  constructor(private activatedRoute: ActivatedRoute,
              private proyectoService: SProyectoService,
              private router: Router,
              public imageService: ImageService) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(data=>{
      this.proyecto = data;
    }, err => {
      alert("Error al acceder a actualizar");
      console.log(err);
      
      this.router.navigate(['']);
      }
    );
    
  }

  onUpdate(): void {
    //Obtenemos id de la Persona
    const id=this.activatedRoute.snapshot.params['id'];
    //captura la url de la imagen en la BBDD
    this.proyecto.img=this.imageService.url;
    //Implementamos metodos
    this.proyectoService.update(id, this.proyecto).subscribe(data=>{
      this.router.navigate(['']);
    }, err=>{
      alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    }
    ); 

  }
  //Maneja el evento al seleccionar la imagen, y al manda a firebase Storage
  uploadImage($event: any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name="proyecto_m_"+id;
    this.imageService.uploadImage($event, name);
  } 


}
