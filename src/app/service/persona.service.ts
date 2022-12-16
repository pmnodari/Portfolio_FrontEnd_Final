import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //Creamos variable ruta fija
  URL="http://localhost:8080/personas/";

  constructor(private http: HttpClient) { }

  //Metodos
  public getPersona():Observable<Persona>{
    return this.http.get<Persona>(this.URL+"traer/perfil");
  }
}
