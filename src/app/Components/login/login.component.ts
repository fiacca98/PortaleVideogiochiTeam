import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  admin: boolean;
  constructor(private loginService: LoginService, private router: Router) { 
  }

  ngOnInit() {
  }

  login() {

    switch(this.loginService.checkData(this.username, this.password)){

      case 0: 
      sessionStorage.setItem("username", this.username);
      sessionStorage.setItem("password", this.password);
      sessionStorage.setItem("admin", "yes");
      this.router.navigate(["/home/"]);
      break;

      case 1:
      sessionStorage.setItem("username", this.username);
      sessionStorage.setItem("password", this.password);
      this.router.navigate(["/home/"]);
      break;

      case 2:
      alert("utente non registrato");
      break;

    }
  }

}