import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './Components/app/app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { DetailComponent } from './Components/detail/detail.component';
import { ListComponent } from './Components/list/list.component';
import { LoginService } from './Services/login.service';
import { UpdateComponent } from './Components/update/update.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { AuthGuardLoginService } from './Services/auth-guard-login.service';
import { HeaderComponent } from './Components/header/header.component';
import { PortaleRouterModule } from './Routing/router.module';
import { GameListService } from './Services/game-list.service';


@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent,
    UpdateComponent,
    LoginComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PortaleRouterModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, AuthGuardService, AuthGuardLoginService, GameListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
