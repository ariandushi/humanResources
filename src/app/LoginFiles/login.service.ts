import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserAuthService } from './_services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  helper = new JwtHelperService();
  constructor(private userAuthService: UserAuthService) { }

  public roleMatch(allowedRoles):boolean {
;
    let token = this.userAuthService.getToken();
    const decodedToken = this.helper.decodeToken(token);
    //this.userAuthService.getRoles();
    
    let isMatch: boolean = false;
    // const userRoles:any=this.userAuthService.getRoles();
    const userRoles: any = decodedToken.roles;
    // const userRoles:any=this.loginComp.roleService.getRoleById();

    if(userRoles !=null && userRoles) {
      for(let j=0; j<allowedRoles.length; j++)  {
        for(let i = 0; i < userRoles.length; i++) {        
          if(userRoles[i] === allowedRoles[j]){
            isMatch=true;
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }
}
