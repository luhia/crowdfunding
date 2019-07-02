import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/Categorie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categorieUrl : string = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) { }

  findAllCategorie(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.categorieUrl);
  }


  findByIdCategorie(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(this.categorieUrl + '/' + id);
  }


    save(produit: Categorie): Observable<Categorie>{
      return this.http.post<Categorie>(this.categorieUrl, produit);
    }

    delete(id : number): Observable<Categorie>{
      return this.http.get<Categorie>(`${this.categorieUrl}/${id}/delete`)
    }


}
