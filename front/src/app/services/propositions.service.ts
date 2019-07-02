import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proposition } from '../models/Proposition';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PropositionsService {
  private propositionUrl : string = 'http://localhost:8080/api/propositions';

  constructor(private http: HttpClient) { }

  findAllProposition(): Observable<Proposition[]>{ 
    return this.http.get<Proposition[]>(this.propositionUrl);
  }


  findById(id: number): Observable<Proposition> {
    return this.http.get<Proposition>(this.propositionUrl + '/' + id);
  }


    save(produit: Proposition): Observable<Proposition>{
      return this.http.post<Proposition>(this.propositionUrl, produit);
    }

    delete(id : number): Observable<Proposition>{
      return this.http.get<Proposition>(`${this.propositionUrl}/${id}/delete`)
    }


}
