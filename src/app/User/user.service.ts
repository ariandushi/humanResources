import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { v4 as uuid } from 'uuid';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseURL="http://localhost:8080/api/v1/hr_management_system/users";
  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL+"/getAll"}`);
  }
  addUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/addNewUser"}`, user);
  }
  getUserById(userId: Guid): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL+"/userId"}/${userId}`);
  }
  getUserProfile(userId: Guid): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL+"/userProfile"}/${userId}`);
  }
  updateUser(userId: Guid, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"/updateUser"}/${userId}`, user);
  }
  // deleteUser(userId: Guid):Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL+"/userId"}/${userId}`);
  // }

  /*getUserByUsername(username): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL+"username/"}${username}`);
  }*/
  /*updateUserUsername(username, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"updateUserByUsername/"}${username}`, user);
  }*/
}
