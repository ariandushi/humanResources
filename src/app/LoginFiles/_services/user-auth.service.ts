import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../../User/user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  public userSubject: BehaviorSubject<User>;
  public currentUser : Observable<User>;
  private baseURL="http://localhost:8080/hr_management/user";

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {
  // this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
  // this.user = this.userSubject.asObservable();}


//   public get userValue(): User {
//     return this.userSubject.value;
// }

// login(username: string, password: string) {
//   return this.httpClient.post<any>(`${this.baseURL}/authenticate`, { username, password })
//       .pipe(map(user => {
//           // store user details and jwt token in local storage to keep user logged in between page refreshes
//           localStorage.setItem('user', JSON.stringify(user));
//           this.userSubject.next(user);
//           return user;
//       }));


  this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
  this.currentUser = this.userSubject.asObservable();
  }
  public get currentUserValue(): any {
    return this.userSubject.value;
  }

  updateLocalStorage(user: any) {
    let localuserToPatch = this.currentUserValue;
    localuserToPatch = user;
    localStorage.setItem('currentUser', JSON.stringify(localuserToPatch));
    this.userSubject.next(localuserToPatch);
  }





  
  public setUserId(userId){
    localStorage.setItem('userId',JSON.stringify(userId));
  }
  public getUserId(){
    return JSON.parse(localStorage.getItem('userId')!);
  }
  public setRoles(roles:[]){
    localStorage.setItem('roles',JSON.stringify(roles));
  }
  public getRoles():[]{
    // ! -> not null
    return JSON.parse(localStorage.getItem('roles')!);
    
  }
  public setToken(jwtToken:string){
    localStorage.setItem('jwtToken', jwtToken);
  }
  public getToken():string{
    return localStorage.getItem('jwtToken')!;
  }
  public clear(){
    localStorage.clear();
  }
  public isLoggedIn(){
    return this.getRoles() && this.getToken();
  }
}
