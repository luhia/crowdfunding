import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../models/Projet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  
  private projetUrl : string = 'http://localhost:8080/api/projets';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Projet[]>{
    return this.http.get<Projet[]>(this.projetUrl);
  }


  findById(id: number): Observable<Projet> {
    return this.http.get<Projet>(this.projetUrl + '/' + id);
  }


    save(produit: Projet): Observable<Projet>{ 
      return this.http.post<Projet>(this.projetUrl, produit);
    }

    delete(id : number): Observable<Projet>{
      return this.http.get<Projet>(`${this.projetUrl}/${id}/delete`)
    }

 
}
