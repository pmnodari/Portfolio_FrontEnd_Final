import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  //La misma que figura en el controller experiencia NetBean
  //@RequestMapping("/experiencia")
  expURL='http://localhost:8080/experiencia/';

  constructor(private httpClient: HttpClient) { }

  //Replicamos los metodos
  //La experiencia va ser de tipo array ya que seran varias de ellas

  //Mostrar lista
  public lista():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL+ 'lista');

  }

  //Detalle de una experiencia
  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
    //TEner en cuenta las comillar es `` por que se le pasa un valor por el PathVariable.
  }

  //Guardar
  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  //Actualizar
  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  //Eliminar
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
//Terminado nos vamos al componente experiencia.
