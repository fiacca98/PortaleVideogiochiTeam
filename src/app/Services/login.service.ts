import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Users } from '../Beans/Users';

@Injectable()
export class LoginService {

  admin: Users = new Users("admin","admin");
  utenti: Users[] = [new Users("luigi","luigi"),new Users("simone","simone")];

  private permission: Subject<boolean> = new Subject<boolean>();
  public permission$ = this.permission.asObservable();

  constructor() { }

  checkData(username: string, password: string): number {
    if(this.admin.username == username && this.admin.password == password)
    {
      return 0;
    }
    else{
      for(let user of this.utenti){
        if(user.username == username && user.password == password){  
              
          return 1;
        }
      }    
      return 2; 
    }
  }

}
