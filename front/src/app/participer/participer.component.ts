import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/Projet';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetsService } from '../services/projets.service';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../auth/token-storage.service';


 
@Component({
  selector: 'app-participer',
  templateUrl: './participer.component.html',
  styleUrls: ['./participer.component.css']
})

export class ParticiperComponent implements OnInit {
  projetId: number;
  projet: Projet;
  projetEditForm: FormGroup; 
  userUsername: string;
  users : User[];
  user : User;
  info: any;
  userEditForm: FormGroup; 



  constructor(private projetService: ProjetsService,
              private userService: UserService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private route: Router,
              private token: TokenStorageService) { }



              
  ngOnInit() {
    this.router.paramMap 
        .subscribe(res => { 
          this.projetId = +res.get('id');
          this.findById(this.projetId);
          console.log("Param Map", res);
        })
    this.info= {
        token: this.token.getToken(),
        username: this.token.getUsername(),
        authorities: this.token.getAuthorities()
      };
    this.findByUsername(this.info.username); 
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


  initUserEditForm(){
    this.userEditForm = this.fb.group({
      name: [this.user.name],
      username: [this.user.username],
      email: [this.user.email],
      password: [this.user.password],
      paypal: [this.user.paypal],
      projet: [this.user.projet]
    });
  }


  findById(pid: number){
    this.projetService.findById(pid)
          .subscribe(res => {
            this.projet = res;
            this.initProjetEditForm();
          });
  }


  findByUsername(username: string){
    this.userService.findByUsername(username)
          .subscribe(res => {
            this.user = res;
            this.initUserEditForm();
          });
  }


  updateProjet(){
    let p = Object.assign({}, this.projet, this.projetEditForm.value);
    this.projetService.save(p).subscribe(res => {
      this.projet = res;
    });
    console.log("Edit projet info: ", this.projetEditForm.value);
  }


  updateUser(){
    let u = Object.assign({}, this.user, this.userEditForm.value);
    this.userService.saveUser(u).subscribe(res => {
      this.user = res;
    });
    console.log("Edit user info: ", this.userEditForm.value);
  }


  contribution(contribution : number){
    this.projet.budget = +this.projet.budget + +contribution;
    this.user.paypal = this.user.paypal - contribution;
    
    this.projetService.save(this.projet).subscribe(res => {
    this.projet = res;
    this.userService.saveUser(this.user).subscribe(res => {
    this.user = res;
      });
    });
  }

     
}