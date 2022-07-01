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
  
  getUsersByRoleId(roleId:Guid):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL+"/getUsersByRole"}/${roleId}`);
  }
  assignRoleToUser(userId: Guid, roleId: Guid): Observable<Object>{
    return this.httpClient.patch(`${this.baseURL+"/assignRole"}/${userId}/roleId/${roleId}`, null);
  }
  removeRoleFromUser(userId: Guid, roleId: Guid): Observable<Object>{
    return this.httpClient.patch(`${this.baseURL+"/removeRole"}/${userId}/roleId/${roleId}`, null);
  }
  public login(loginData: any){
    return this.httpClient.post(this.baseURL+'/login',loginData, {headers:this.requestHeader});
  }
  deleteUser(userId: Guid):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"/deleteUser"}/${userId}`);
  }
  getUsersBySkillId(skillId:Guid):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL+"/getUsersBySkill"}/${skillId}`);
  }
  assignSkillToUser(userId: Guid, skillId: Guid): Observable<Object>{
    return this.httpClient.patch(`${this.baseURL+"/assignSkill"}/${userId}/skillId/${skillId}`, null);
  }
  removeSkillFromUser(userId: Guid, skillId: Guid): Observable<Object>{
    return this.httpClient.patch(`${this.baseURL+"/removeSkill"}/${userId}/skillId/${skillId}`, null);
  }
  
}
