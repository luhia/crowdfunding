import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/Projet';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjetsService } from '../services/projets.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserService } from '../services/user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  projets : Projet[];
  users : User[];
  user : User;
  info: any;
  userEditForm: FormGroup;

  constructor(private fb : FormBuilder, private projetService : ProjetsService, private userService : UserService, private token: TokenStorageService) { }

  ngOnInit() {
    this.info= {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.findByUsername(this.info.username);
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

  findAllUser(){
    return this.userService
    .findAllUser()
    .subscribe(res =>{console.log('Resultat users: ', res);
    this.users = res;
    }) 
  }

  findByUsername(username: string){
    this.userService.findByUsername(username)
          .subscribe(res => {
            this.user = res;
            this.initUserEditForm();
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


} 