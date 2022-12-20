import { Injectable } from '@angular/core';

//Creamos unas constantes
const TOKEN_KEY= 'AuthToken';
const USERNAME_KEY= 'AuthUsername';
const AUTHORITIES_KEY= 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  //Declaramos el array de roles
  roles: Array<string> =[];

  constructor() { }

  //Metodos Set y Get
  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);//remover el que este
    window.sessionStorage.setItem(TOKEN_KEY, token);//poner el nuevo
  }

  public getToken(): string{
    //! porque no esta inicializado
    return sessionStorage.getItem(TOKEN_KEY)!;
  }

  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(): string{
    //! porque no esta inicializado
    return sessionStorage.getItem(USERNAME_KEY)!;
  }

  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    //! porque no esta inicializado
    this.roles=[];
    if (sessionStorage.getItem(AUTHORITIES_KEY)!){
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!)
          .forEach((authority: any) => {
            this.roles.push(authority.authority);
      });      
    }
    return this.roles;
  }

  //Cerrar session
  public logaut(): void {
    window.sessionStorage.clear();
  }
}
