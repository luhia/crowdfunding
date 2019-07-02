import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoriesService } from '../services/categories.service';
import { Categorie } from '../models/Categorie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categorieForm : FormGroup;
  categories : Categorie[];

  constructor(private fb : FormBuilder, private categorieService : CategoriesService, private route: Router) { }


  ngOnInit() {
    this.initCategorieform();
    this.findAllCategorie();
  }


  initCategorieform() {
    this.categorieForm = this.fb.group({
      categorie: [''],
      retour: ['']
    }) 
  }



  findAllCategorie(){
    return this.categorieService
    .findAllCategorie()
    .subscribe(res =>{console.log('Resultat: ', res);
    this.categories = res;
    })
  }



  saveCategorie(){
    console.log('Categorie from values', this.categorieForm.value);
    this.categorieService.save(this.categorieForm.value).subscribe(res => {
        console.log('New Categorie: ', res);
        this.initCategorieform();
        this.findAllCategorie();
    })
  }


  deleteCategorie(id: number){
    this.categorieService.delete(id).subscribe(res => {
      console.log('Delete categorie: ', res);
      this.findAllCategorie();
    })
  }


}
