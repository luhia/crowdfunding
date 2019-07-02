import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';


import { ProjetsComponent } from './projets/projets.component';
import { ProjetComponent } from './projet/projet.component';

import { CategoriesComponent } from './categories/categories.component';
import { CategorieComponent } from './categorie/categorie.component';

import { PropositionsComponent } from './propositions/propositions.component';
import { PropositionComponent } from './proposition/proposition.component';

import { ParticiperComponent } from './participer/participer.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
    
    {path: 'home', component: HomeComponent},
    { path: 'user', component: UserComponent},
    {path: 'pm', component: PmComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'auth/login', component: LoginComponent},
    {path: 'signup', component: RegisterComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path:'profile', component: ProfileComponent},
    {path:'profile/:id', component: ProfileComponent},


    {path:'projets', component: ProjetsComponent},
    {path:'projets/:id', component: ProjetComponent},

    {path:'categories', component: CategoriesComponent},
    {path:'categories/:id', component: CategorieComponent},

    {path:'propositions', component: PropositionsComponent},
    {path:'propositions/:id', component: PropositionComponent},

    {path:'participer', component: ParticiperComponent},
    {path:'participer/:id', component: ParticiperComponent},

    {path:'information', component: InformationComponent},
    {path:'information/:id', component: InformationComponent}
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }