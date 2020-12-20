import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RecettesComponent } from './recettes/recettes.component';
import { LoginComponent } from './login/login.component';
import { AddRecettesComponent } from './add-recettes/add-recettes.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'recettes', component: RecettesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'ajouterRecette', component: AddRecettesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
