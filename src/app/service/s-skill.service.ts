import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  //skillURL='http://localhost:8080/hys/';
  URL= environment.URL+'hys/'

  constructor(private httpCliente: HttpClient) { }

  //Metodos como los del Backend

  //Mostrar lista
  public lista(): Observable<Skill[]>{
    return this.httpCliente.get<Skill[]>(this.URL + 'lista');
  }

  //Detalle registro
  public detail(id: number): Observable<Skill>{
    return this.httpCliente.get<Skill>(this.URL + `detail/${id}`);
  }

  //Guardar
  public save(skill: Skill): Observable<any>{
    return this.httpCliente.post<Skill>(this.URL +'create', skill);
  }

  //Borrar
  public delete(id: number): Observable<any>{
    return this.httpCliente.delete<Skill>(this.URL + `delete/${id}`);
  }

  //Actualizar
  public update(id:number, skill: Skill): Observable<any>{
    return this.httpCliente.put<any>(this.URL + `update/${skill.id}`, skill);
  }
}
