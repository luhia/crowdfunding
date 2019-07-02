import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles: string[];
  private authority: string;
  users : User[];
  user : User;
  info: any;
  userEditForm: FormGroup;

  constructor(private fb : FormBuilder, private tokenStorage: TokenStorageService, private token: TokenStorageService, private route: Router, private userService : UserService) { }

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
      this.info= {
        token: this.token.getToken(),
        username: this.token.getUsername(),
        authorities: this.token.getAuthorities()
      };
      this.findByUsername(this.info.username);
    }
  } 

  logout() {
    this.token.signOut();
    window.location.reload();
    
  
  }

  reloadPage() {
    window.location.reload();
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
