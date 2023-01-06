import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {

  //expURL='http://localhost:8080/educacion/';
  URL= environment.URL+'educacion/';
  
  constructor(private httpClient: HttpClient) { }

  //Construimos lo metodos del servidor

  //Mostrar lista
  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL+'lista');
    
  }

  //Detalle de un registro educacion
  public detail(id:number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL+`detail/${id}`);
  }
  
  //Guardar
  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL+'create', educacion);
  }

  //Eliminar
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+`delete/${id}`);
  }

  //Actualizar
  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`, educacion);
  }
}
