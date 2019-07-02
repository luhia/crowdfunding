import { Component, OnInit } from '@angular/core';
import { Proposition } from '../models/Proposition';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropositionsService } from '../services/propositions.service';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent implements OnInit {

  propositionId: number;
  proposition: Proposition;
  propositionEditForm: FormGroup;

  constructor(private ps: PropositionsService, private router: ActivatedRoute, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.router.paramMap 
        .subscribe(res => {
          this.propositionId = +res.get('id');
          this.findById(this.propositionId);
          console.log("Param Map", res);
        })
  }

  initPropositionEditForm(){
    this.propositionEditForm = this.fb.group({
      nomproposition: [this.proposition.nomproposition],
      descriptionprojet: [this.proposition.descriptionprojet],
      objectifprojet: [this.proposition.objectifprojet],
      categorievoulue: [this.proposition.categorievoulue],
      dateproposee: [this.proposition.dateproposee],
      imageproposee: [this.proposition.imageproposee]
    });
  }



  findById(pid: number){
    this.ps.findById(pid)
          .subscribe(res => {
            this.proposition = res;
            this.initPropositionEditForm();
          });
  }



  updateProposition(){
    let p = Object.assign({}, this.proposition, this.propositionEditForm.value);
    this.ps.save(p).subscribe(res => {
      this.proposition = res;
      this.route.navigate(['/propositions'])
    });
    console.log("Edit proposition info: ", this.propositionEditForm.value);
  }


}

