import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/Projet';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetsService } from '../services/projets.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  projetId: number;
  projet: Projet;
  projetEditForm: FormGroup;

  constructor(private ps: ProjetsService, private router: ActivatedRoute, private fb: FormBuilder, private route: Router) { }

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
      image: [this.projet.image],
      date: [this.projet.date]
    });
  }



  findById(pid: number){
    this.ps.findById(pid)
          .subscribe(res => {
            this.projet = res;
            this.initProjetEditForm();
          });
  }



  updateProjet(){
    let p = Object.assign({}, this.projet, this.projetEditForm.value);
    this.ps.save(p).subscribe(res => {
      this.projet = res;
      this.route.navigate(['/projets'])
    });
    console.log("Edit projet info: ", this.projetEditForm.value);
  }


}
