import { Component } from '@angular/core';
import { AuthGuardService } from '../../Services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login: boolean = false;
  constructor (private loginService: AuthGuardService){
    this.loginService.sectionSelected$.subscribe(login=>{
      this.login = login;
    });
  }
}
