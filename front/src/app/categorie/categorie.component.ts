import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/Categorie';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categorieId: number;
  categorie: Categorie;
  categorieEditForm: FormGroup;

  constructor(private ps: CategoriesService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private route: Router) { } 

  ngOnInit() {
    this.router.paramMap
        .subscribe(res => {
          this.categorieId = +res.get('id');
          this.findByIdCategorie(this.categorieId);
          console.log("Param Map", res);
        })
  }

  initCategorieEditForm(){
    this.categorieEditForm = this.fb.group({
      categorie: [this.categorie.categorie],
      retour: [this.categorie.retour],
    });
  }



  findByIdCategorie(pid: number){
    this.ps.findByIdCategorie(pid)
          .subscribe(res => {
            this.categorie = res;
            this.initCategorieEditForm();
          });
  }



  updateCategorie(){
    let p = Object.assign({}, this.categorie, this.categorieEditForm.value);
    this.ps.save(p).subscribe(res => {
      this.categorie = res;
      this.route.navigate(['/categories'])
    });
    console.log("Edit categorie info: ", this.categorieEditForm.value);
  }


}
