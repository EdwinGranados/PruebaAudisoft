import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.development";
import { Observable } from 'rxjs';
import { Profesor } from '../interfaces/profesor';


@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private endpoint: string = environment.endPoint;
  private urlApi: string = this.endpoint + 'Profesores';
  constructor(private http: HttpClient) { }

  getProfesor():Observable<Profesor[]> {
    return this.http.get<Profesor[]>(`${this.urlApi}`)
  }

  getProfesorId(id:number):Observable<Profesor>{
    return this.http.get<Profesor>(`${this.urlApi}/${id}`)
  }

  setProfesor(profesor:Profesor):Observable<Profesor>{
    return this.http.post<Profesor>(`${this.urlApi}`,profesor)
  }

  updateProfesor(profesor:Profesor):Observable<Profesor>{
    return this.http.put<Profesor>(`${this.urlApi}/${profesor.id}`,profesor)
  }

  deleteProfesor(id:number):Observable<Profesor>{
    return this.http.delete<Profesor>(`${this.urlApi}/${id}`)
  }
}
