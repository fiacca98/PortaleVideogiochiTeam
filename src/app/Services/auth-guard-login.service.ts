import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardLoginService {


  canActivate(){
    if(sessionStorage.getItem("username") == null && sessionStorage.getItem("password") == null )
      return true;
      else{
        this.router.navigate(["/home"]);
        return false;
      }
    }
  constructor(private router:Router) { }

}
