import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.development";
import { Observable } from 'rxjs';
import { Nota } from '../interfaces/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private endpoint: string = environment.endPoint;
  private urlApi: string = this.endpoint + 'Notas';
  constructor(
    private http:HttpClient
  ) { }

  getNotas():Observable<Nota[]> {
    return this.http.get<Nota[]>(`${this.urlApi}`)
  }

  getNotaId(id:number):Observable<Nota>{
    return this.http.get<Nota>(`${this.urlApi}/${id}`)
  }

  setNota(nota:Nota):Observable<Nota>{
    return this.http.post<Nota>(`${this.urlApi}`,nota)
  }

  updateNota(nota:Nota):Observable<Nota>{
    return this.http.put<Nota>(`${this.urlApi}/${nota.id}`,nota)
  }

  deleteNota(id:number):Observable<Nota>{
    return this.http.delete<Nota>(`${this.urlApi}/${id}`)
  }

}
