
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Projet } from '../models/Projet';
import { ProjetsService } from '../services/projets.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Categorie } from '../models/Categorie';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  projets : Projet[];
  categories : Categorie[];
  private roles: string[];
  private authority: string;
  info: any;

  constructor(private fb : FormBuilder, private tokenStorage: TokenStorageService, private projetService : ProjetsService, private categorieService : CategoriesService, private token: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') { 
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
    this.findAll();
    this.findAllCategorie(); 
  }



  findAll(){
    return this.projetService
    .findAll()
    .subscribe(res =>{console.log('Resultat: ', res);
    this.projets = res;
    })
  }

  findAllCategorie(){
    return this.categorieService
    .findAllCategorie()
    .subscribe(res =>{console.log('Resultat: ', res);
    this.categories = res;
    })
  }

} 