import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
  //Inicializamos objeto Persona
  persona: Persona=new Persona("","","","");
  
  //Llamamos al servicio
  constructor(public personaService: PersonaService){};

  ngOnInit(): void { 
    this.personaService.getPersona().subscribe(data=>{
      this.persona=data;
    })
  }

}
