import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skillURL='http://localhost:8080/hys/';

  constructor(private httpCliente: HttpClient) { }

  //Metodos como los del Backend

  //Mostrar lista
  public lista(): Observable<Skill[]>{
    return this.httpCliente.get<Skill[]>(this.skillURL + 'lista');
  }

  //Detalle registro
  public detail(id: number): Observable<Skill>{
    return this.httpCliente.get<Skill>(this.skillURL + `detail/${id}`);
  }

  //Guardar
  public save(skill: Skill): Observable<any>{
    return this.httpCliente.post<Skill>(this.skillURL +'create', skill);
  }

  //Borrar
  public delete(id: number): Observable<any>{
    return this.httpCliente.delete<Skill>(this.skillURL + `delete/${id}`);
  }

  //Actualizar
  public update(id:number, skill: Skill): Observable<any>{
    return this.httpCliente.put<any>(this.skillURL + `update/${skill.id}`, skill);
  }
}
