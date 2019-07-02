import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/Projet';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProjetsService } from '../services/projets.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  projetId: number;
  projet: Projet;
  projetEditForm: FormGroup; 

  constructor(private ps: ProjetsService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private route: Router) { }

  ngOnInit() {
    this.router.paramMap 
        .subscribe(res => {
          this.projetId = +res.get('id');
          this.findById(this.projetId);
          console.log("Param Map", res);
        })
  }

  initProjetEditForm(){
    this.projetEditForm = this.fb.group({
      nomprojet: [this.projet.nomprojet],
      description: [this.projet.description],
      objectif: [this.projet.objectif],
      budget: [this.projet.budget],
      categorie: [this.projet.categorie]
    });
  }



  findById(pid: number){
    this.ps.findById(pid)
          .subscribe(res => {
            this.projet = res;
            this.initProjetEditForm();
          });
  }


}