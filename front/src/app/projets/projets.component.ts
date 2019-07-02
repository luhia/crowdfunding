import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProjetsService } from '../services/projets.service';
import { Projet } from '../models/Projet';
import { Router } from '@angular/router';
import { Categorie } from '../models/Categorie';
import { CategoriesService } from '../services/categories.service';
import { Proposition } from '../models/Proposition';
import { PropositionsService } from '../services/propositions.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  projetForm : FormGroup;
  projets : Projet[];
  projet : Projet; 
  categories : Categorie[];
  propositionForm : FormGroup;
  propositions : Proposition[];
  proposition : Proposition; 

  constructor(private fb : FormBuilder, private projetService : ProjetsService, private categorieService : CategoriesService, private propositionService : PropositionsService, private route: Router) { }


  ngOnInit() {
    this.initProjetform(); 
    this.findAll();
    this.findAllCategorie();
    this.findAllProposition(); 
  }


  initProjetform() {
    this.projetForm = this.fb.group({
      nomprojet: [''],
      description: [''], 
      objectif: [''],
      budget: [''],
      image: [''],
      date: [''],
      categorie: ['']
    }) 
  }

  initPropositionform() {
    this.propositionForm = this.fb.group({
      nomproposition: [''],
      descriptionprojet: [''],
      objectifprojet: [''],
      categorievoulue: [''],
      dateproposee: [''],
      imageproposee: ['']
    }) 
  }



  findAll(){
    return this.projetService
    .findAll()
    .subscribe(res =>{console.log('Resultat projets: ', res);
    this.projets = res;
    }) 
  }




  saveProjet(){
    console.log('Projet from values', this.projetForm.value);
    this.projetService.save(this.projetForm.value).subscribe(res => {
        console.log('New Projet: ', res);
        this.initProjetform();
        this.findAll();
   
    })
  }


  deleteProjet(id: number){
    this.projetService.delete(id).subscribe(res => {
      console.log('Delete projet: ', res);
      this.findAll();
    })
  }



  findAllCategorie(){
    return this.categorieService
    .findAllCategorie()
    .subscribe(res =>{console.log('Resultat: ', res);
    this.categories = res;
    })
  }
 
  findAllProposition(){
    return this.propositionService
    .findAllProposition()
    .subscribe(res =>{console.log('Resultat: ', res);
    this.propositions = res;
    })
  }

  deleteProposition(id: number){
    this.propositionService.delete(id).subscribe(res => {
      console.log('Delete projet: ', res);
      this.findAllProposition();
    })
  }

}
