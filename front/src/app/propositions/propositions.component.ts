import { Component, OnInit } from '@angular/core';
import { Proposition } from '../models/Proposition';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PropositionsService } from '../services/propositions.service';


@Component({
  selector: 'app-propositions',
  templateUrl: './propositions.component.html',
  styleUrls: ['./propositions.component.css']
})
export class PropositionsComponent implements OnInit {
  propositionForm : FormGroup;
  propositions : Proposition[];
  proposition : Proposition;

  constructor(private fb : FormBuilder, private propositionService : PropositionsService, private route: Router) { } 

  ngOnInit() {
    this.initPropositionform();  
    this.findAllProposition(); 
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


  findAllProposition(){
    return this.propositionService
    .findAllProposition()
    .subscribe(res =>{console.log('Resultat: ', res);
    this.propositions = res;
    })
  }


  saveProposition(){
    console.log('Proposition from values', this.propositionForm.value);
    this.propositionService.save(this.propositionForm.value).subscribe(res => {
        console.log('New Proposition: ', res);
        this.initPropositionform();
        this.findAllProposition();
    })
  }

  deleteProposition(id: number){
    this.propositionService.delete(id).subscribe(res => {
      console.log('Delete projet: ', res);
      this.findAllProposition();
    })
  }

}
