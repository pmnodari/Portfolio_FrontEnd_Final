import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  persona: Persona=null;

  constructor(private activatedRoute: ActivatedRoute,
              private personaService: PersonaService,
              private router: Router,
              public imageService: ImageService) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(data=>{
      this.persona = data;
    }, err => {
      alert("Error al actualizar perfil");
      this.router.navigate(['']);
      }
    );
    
  }

  onUpdate(): void {
    //Obtenemos id de la Persona
    const id=this.activatedRoute.snapshot.params['id'];
    //captura la url de la imagen en la BBDD
    this.persona.img=this.imageService.url;
    //Implementamos metodos
    this.personaService.update(id, this.persona).subscribe(data=>{
      this.router.navigate(['']);
    }, err=>{
      alert("Error al modificar Perfil");
      this.router.navigate(['']);
    }
    ); 

  }
  //Maneja el evento al seleccionar la imagen, y al manda a firebase Storage
  uploadImage($event: any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name="perfil_"+id;
    this.imageService.uploadImage($event, name);
  }

}
/* El metodo actualizar funciona para todos los campos menos para imagenes.
La idea es la siguiente:
  1-Desde el Front End se carga la imagen
  2-Luego se carga al Storage de Firebase la imagen
  3-El storage de Firebase devuelve al front end la url.
  4-Luego el Front End lo envia al servicio, y este lo manda al Backend.
  5-Luego que se este en la pantalla principal, se le pedira al backend dicha url de la imagen
*/
