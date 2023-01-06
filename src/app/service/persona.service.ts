import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //Creamos variable ruta fija
  //URL="http://localhost:8080/personas/";
  
  URL= environment.URL+'personas/'

  constructor(private httpClient: HttpClient) { }

  //Metodos
 /*  public getPersona():Observable<Persona>{
    return this.http.get<Persona>(this.URL+"traer/perfil");
  } */

    //Mostrar lista
    public lista(): Observable<Persona[]>{
      return this.httpClient.get<Persona[]>(this.URL+'lista');
      
    }
  
    //Detalle de un registro educacion
    public detail(id:number): Observable<Persona>{
      return this.httpClient.get<Persona>(this.URL+`detail/${id}`);
    }
    
    //Guardar
      public save(persona: Persona): Observable<any>{
        return this.httpClient.post<any>(this.URL+'create', persona);
    }
  
    //Eliminar
    // public delete(id: number): Observable<any>{
    //   return this.httpClient.delete<any>(this.URL+`delete/${id}`);
    // }
  
    //Actualizar
    public update(id: number, persona: Persona): Observable<any>{
      return this.httpClient.put<any>(this.URL+`update/${id}`, persona);
    }
}
