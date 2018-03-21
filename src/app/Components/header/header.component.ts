import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../Services/auth-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  admin: boolean = false;
  login: boolean;
  constructor(private loginService: AuthGuardService) {
    this.username = sessionStorage.getItem("username");
    if(sessionStorage.getItem("admin") == "yes"){
      this.admin = true;
    }
    console.log(this.username);

    this.loginService.sectionSelected$.subscribe(login=>{
      this.login = login;
    });

   }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.username = sessionStorage.getItem("username");
    if(sessionStorage.getItem("admin") == "yes"){
      this.admin = true;
    }
    console.log(this.username);
    
  }

  logOut(){
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
    sessionStorage.removeItem("admin");
    this.loginService.logOut();
  }

}
