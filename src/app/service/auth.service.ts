import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { UsuarioNuevo } from "../model/usuario-nuevo";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Ruta del backend
  //authURL="http://localhost:8080/auth/";
  URL= environment.URL+'auth/'

  constructor(private httpClient: HttpClient) { }

  //Metodo
  public nuevo(usuarioNuevo: UsuarioNuevo): Observable<any>{
    return this.httpClient.post<any>(this.URL+'nuevo', usuarioNuevo);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.URL+'login', loginUsuario);

  }
}
