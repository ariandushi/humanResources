import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { catchError, Observable, throwError } from "rxjs";
import { UserAuthService } from "../_services/user-auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    helper = new JwtHelperService();
    constructor(private userAuthService:UserAuthService, private router: Router){}
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
    //   if (req.headers.get('No-Auth') === 'True') {
    //     return next.handle(req.clone());
    //   }
  
      const token = this.userAuthService.getToken();
      const decodedToken = this.helper.decodeToken(token);
  
      if(decodedToken != undefined ){
      req = this.addToken(req, token);
      }
      return next.handle(req).pipe(
          catchError(
              (err:HttpErrorResponse) => {
                  console.log(err.status);
                  if(err.status === 401) {
                      this.router.navigate(['/users']);
                  } else if(err.status === 403) {
                      this.router.navigate(['/users']);
                  }
                  return throwError("Some thing is wrong");
              }
          )
      );
    }
  
  
    private addToken(request:HttpRequest<any>, token:string) {
        return request.clone(
            {
                setHeaders: {
                    Authorization : `Bearer ${token}`
                }
            }
        );
    }
    // private addToken(request: HttpRequest<any>, token: string){
    //     return request.clone({setHeaders:{
    //         Authorization: `Bearer ${token}`
    //     }});
    // }
}