import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { UserService } from '../../User/user.service';
import { LoginService } from '../login.service';
import { LoginComponent } from '../login/login.component';
import { UserAuthService } from '../_services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  helper = new JwtHelperService();

  constructor(private userAuthService: UserAuthService, private router: Router, private userService: UserService, private loginService: LoginService){}
 
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  let isLoggedIn = this.userAuthService.isLoggedIn();
  if(isLoggedIn!=null){
  let token = this.userAuthService.getToken();
  //  const decodedToken = this.helper.decodeToken(token);

   const role = route.data['roles'] as Array<string>;
  // const role = decodedToken.roles;
  // const role = rolet.roleName;
   if(role){
    const match = this.loginService.roleMatch(role);
    if(match){
      return true;
    }
    else{
      this.router.navigate(['/forbidden']);
      console.log("not allowed");
           return false;
    }
   }
   this.router.navigate(['/forbidden']);
   console.log("not allowed 2");
   return false;
  }
  this.router.navigate(['/users']);
  return false;

 }
 
  // canActivate(
  //   route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  //     ;
  //     if(this.userAuthService.getToken() !== null){
  //       console.log(route.data["jwt"]);
  //       console.log(route.data["roles"]);

  //      const role = route.data['roles'] as Array<string>;
  //      if(role){
  //       const match=this.userService.roleMatch(role);
  //       if(match){
  //         return true;
  //       }else{
  //         this.router.navigate(['/users']);
  //         return false;
  //       }
  //      }
    
  //     }
  //     this.router.navigate(['/users']);
  //     return false;
  // }
  

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   const user = this.userAuthService.userValue;
  //   if (user) {
  //       // check if route is restricted by role
  //       if (route.data['roles'] && route.data['roles'].indexOf(user.role) === -1) {
  //           // role not authorised so redirect to home page
  //           this.router.navigate(['/']);
  //           return false;
  //       }

  //       // authorised so return true
  //       return true;
  //   }
  //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  //       return false;
  // }
}
