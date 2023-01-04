import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class SProyectoService {

  URL= environment.URL+'proyectos/';

  constructor(private httpClient: HttpClient) { }

  //Metodos CRUD

  //Listar
  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.URL+'lista');
  }

  //Buscar por id
  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL+`detail/${id}`);
  }

  //Guardar
  public save(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.URL+'create', proyecto);
  }

  //Eliminar
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL+`delete/${id}`);
  }

  //Actualizar
  public update(id: number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.URL+`update/${id}`, proyecto);
  }
  
}


