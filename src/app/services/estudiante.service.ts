import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.development";
import { Observable } from 'rxjs';
import { Estudiante } from "src/app/interfaces/estudiante";


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private endpoint: string = environment.endPoint;
  private urlApi: string = this.endpoint + 'Estudiantes';

  constructor(
    private http: HttpClient
  ) { }

  getEstudiantes():Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.urlApi}`)
  }

  getEstudianteId(id:number):Observable<Estudiante>{
    return this.http.get<Estudiante>(`${this.urlApi}/${id}`)
  }

  setEstudiante(estudiante:Estudiante):Observable<Estudiante>{
    return this.http.post<Estudiante>(`${this.urlApi}`,estudiante)
  }

  updateEstudiante(estudiante:Estudiante):Observable<Estudiante>{
    return this.http.put<Estudiante>(`${this.urlApi}/${estudiante.id}`,estudiante)
  }

  deleteEstudiante(id:number):Observable<Estudiante>{
    return this.http.delete<Estudiante>(`${this.urlApi}/${id}`)
  }

}
