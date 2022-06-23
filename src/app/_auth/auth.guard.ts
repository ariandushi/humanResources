import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../User/user.service';
import { UserAuthService } from '../_services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userAuthService: UserAuthService, private router: Router, private userService: UserService){}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     if(this.userAuthService.getToken() !== null){
  //       console.log(route.data["jwt"]);
  //      const role = route.data["roles"] as Array<string>;
  //      if(role){
  //       const match=this.userService.roleMatch(role);
  //       if(match){
  //         return true;
  //       }else{
  //         this.router.navigate(['/login']);
  //         return false;
  //       }
  //      }
  //     }
  //     this.router.navigate(['/users']);
  //     return false;
  // }
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.userAuthService.currentUserValue;
    if (user) {
        // check if route is restricted by role
        if (route.data['roles'] && route.data['roles'].indexOf(user.role) === -1) {
            // role not authorised so redirect to home page
            this.router.navigate(['/']);
            return false;
        }

        // authorised so return true
        return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
  }
}