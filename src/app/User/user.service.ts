import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Guid } from 'guid-typescript';
import { UserAuthService } from '../LoginFiles/_services/user-auth.service';
import { Project } from '../Project/project';
import { LoginComponent } from '../LoginFiles/login/login.component';
import { UserDTO } from './userDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  requestHeader= new HttpHeaders()
  private baseURL="http://localhost:8080/hr_management/user";
  constructor(private httpClient: HttpClient,
     private userAuthService:UserAuthService
     ) { }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL+"/getAll"}`);
  }
  addUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/addNewUser"}`, user);
  }
  getUserById(userId: Guid): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL+"/userId"}/${userId}`);
  }
  getWholeUserByUserId(userId:Guid):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL+"/getWholeUserByUserId"}/${userId}`);
  }
  // getUserProfile(userId: Guid): Observable<User>{
  //   return this.httpClient.get<User>(`${this.baseURL+"/userProfile"}/${userId}`);
  // }
  updateUser(userId: Guid, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"/updateUser"}/${userId}`, user);
  }

  assignProjectToUser(userId: Guid, projectId:Guid): Observable<Object>{
    return this.httpClient.patch(`${this.baseURL+"/assignProjectToUser"}/${userId}/projectId/${projectId}`, null);
  }

  getUsersByProjectId(projectId:Guid):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL+"/getUsersByProject"}/${projectId}`);
  }

  getPasswordDTO(userId: Guid):Observable<UserDTO>{
    return this.httpClient.get<UserDTO>(`${this.baseURL+"/getUserPassword"}/${userId}`);
  }

  changePassword(userDTO: UserDTO):Observable<Object>{
    return this.httpClient.patch(`${this.baseURL + "/changePassword"}`, userDTO);
  }
  

  public login(loginData: any){
    return this.httpClient.post(this.baseURL+'/login',loginData, {headers:this.requestHeader});
  }
  public forUser(){
    return this.httpClient.get(this.baseURL+"/forUser", {responseType:'text'});
  }
  public forAdmin(){
    return this.httpClient.get(this.baseURL+"/forAdmin", {responseType:'text'});
  }


  // roleMatch(allowedRoles: any): boolean {
  //   var isMatch = false;
  //   var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
  //   allowedRoles.forEach(element => {
  //     if (userRoles.indexOf(element) > -1) {
  //       isMatch = true;
  //       return false;
  //     }
  //   });
  //   return isMatch;

  // }

  public roleMatch(allowedRoles):boolean{
    let isMatch: boolean = false;
    const userRoles:any=this.userAuthService.getRoles();
    // const userRoles:any=this.loginComp.roleService.getRoleById();

    if(userRoles !=null && userRoles){
      for(let i = 0; i < userRoles.length; i++){
        for(let j=0; j<allowedRoles.length; j++){
          if(userRoles[i].roleName === allowedRoles[j]){
            isMatch=true;
            return isMatch;
          }else
          {
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }




  deleteUser(userId: Guid):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"/deleteUser"}/${userId}`);
  }

  /*getUserByUsername(username): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL+"username/"}${username}`);
  }*/
  /*updateUserUsername(username, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"updateUserByUsername/"}${username}`, user);
  }*/
}
