import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { AuthGuardService } from '../Services/auth-guard.service';
import { LoginComponent } from '../Components/login/login.component';
import { DetailComponent } from '../Components/detail/detail.component';
import { UpdateComponent } from '../Components/update/update.component';
import { ListComponent } from '../Components/list/list.component';
import { AuthGuardLoginService } from '../Services/auth-guard-login.service';




const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: 'lista', component: ListComponent, canActivate: [AuthGuardService]},
  { path: 'modifica/:id', component: UpdateComponent, canActivate: [AuthGuardService]},
  { path: 'dettaglio/:id', component: DetailComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardLoginService]},

  { path: "dettaglio", redirectTo: "/lista", pathMatch: "prefix"},

  { path: "modifica", redirectTo: "/modifica/x", pathMatch: "prefix"},
  { path: "", redirectTo: "/login", pathMatch: "full" },
  
  { path: "**", component: HomeComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortaleRouterModule {
}