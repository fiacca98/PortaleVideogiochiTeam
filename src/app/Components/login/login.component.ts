import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "../../Services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  login() {
    let isAdmin: boolean = false;
    switch (this.loginService.checkData(this.username, this.password)) {
      case 0:
        isAdmin = true;
        break;
      case 1:
        break;
      case 2:
        alert("utente non registrato");
        return;
      default:
        console.log("valore checkData non corrisposto ");
        return;
    }
    sessionStorage.setItem("username", this.username);
    sessionStorage.setItem("password", this.password);
    if (isAdmin) {
      sessionStorage.setItem("admin", "yes");
    }
    this.router.navigate(["/home/"]);
  }
}
