import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/persona'
constructor(private httpClient: HttpClient) { }

public list(): Observable<Persona[]>{
  return this.httpClient.get<Persona[]>(this.URL+ '/lista');
}

public crear(persona:Persona):Observable<any>{
  return this.httpClient.post<any>(this.URL+ '/crear', persona);
}

public borrar(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.URL+ `/borrar/${id}`);
}

public editar(persona:Persona):Observable<any>{
  return this.httpClient.put<any>(this.URL+ '/editar', persona);
}
public login(persona:Persona):Observable<any>{
  return this.httpClient.post<any>(this.URL+ '/autenticacion/login', persona);
}

}
