import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

import { ProjetsComponent } from './projets/projets.component';
import { ProjetComponent } from './projet/projet.component';

import { CategoriesComponent } from './categories/categories.component';
import { CategorieComponent } from './categorie/categorie.component';



import { PropositionsComponent } from './propositions/propositions.component';
import { PropositionComponent } from './proposition/proposition.component';
import { ParticiperComponent } from './participer/participer.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    NavbarComponent,
    ProfileComponent,

    ProjetsComponent,
    ProjetComponent,

    CategoriesComponent,
    CategorieComponent,


    
    PropositionsComponent,
    PropositionComponent,
    
    ParticiperComponent,
    
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
