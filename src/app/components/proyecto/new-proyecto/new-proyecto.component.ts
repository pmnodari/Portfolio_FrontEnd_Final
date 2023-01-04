import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { SProyectoService } from 'src/app/service/sproyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombreP="";
  descripcionP="";
  img="";

  constructor(private sProyecto: SProyectoService,
              private router: Router,
              private activatedRoute: ActivatedRoute, 
              public imageService: ImageService) { }

  ngOnInit() {
  }

  //Creo el registro
  onCreate(): void {
    //Creamos el objeto proyecto y le pasamos a la imagen la url de la imagen alojada en Firebase
    const proyecto=new Proyecto(this.nombreP, this.descripcionP, this.img=this.imageService.url);

    this.sProyecto.save(proyecto).subscribe(data=>{
      alert("Proyecto añadido");
      //Volvemos al home 
      this.router.navigate(['']);
  }, err=>{
    alert("Falló el registro");
    //Volvemos al home 
    this.router.navigate(['']);
    });
  }

  //Maneja el evento al seleccionar la imagen, y al manda a firebase Storage
  uploadImage($event: any){
    //const id = this.activatedRoute.snapshot.params['id'];
    const name="proyecto_"+ this.nombreP;
    this.imageService.uploadImage($event, name);
  }

}
