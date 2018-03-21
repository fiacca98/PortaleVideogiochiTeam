import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthGuardService implements CanActivate{

 
  private sectionSelected: Subject<boolean> = new Subject<boolean>();
  public sectionSelected$ = this.sectionSelected.asObservable();


  canActivate(nome: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    ;

    if(sessionStorage.getItem("username") != null && sessionStorage.getItem("password") != null ){
      if(state.url.indexOf("modifica") != -1){
        if(sessionStorage.getItem("admin") == "yes"){
          this.sectionSelected.next(true);
          return true;
        }
        else{
          this.sectionSelected.next(false);
          this.router.navigate(["/login"]);
        }
      }
      else{
        this.sectionSelected.next(true);
        return true;
      }
    }
    else{
      this.sectionSelected.next(false);
      this.router.navigate(["/login"]);
    }
    }

    logOut() {
      this.sectionSelected.next(false);
    }

  constructor(private router:Router) { 
    
  }

}
