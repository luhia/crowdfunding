import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/test/user';
  private pmUrl = 'http://localhost:8080/api/test/pm';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  private profileUrl : string = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  } 

  findAllUser(): Observable<User[]>{ 
    return this.http.get<User[]>(this.profileUrl);
  }


  findByUsername(username: string): Observable<User> {
    return this.http.get<User>(this.profileUrl + '/' + username);
  } 

  saveUser(produit: User): Observable<User>{ 
    return this.http.post<User>(this.profileUrl, produit);
  }
}
