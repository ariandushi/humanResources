import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from './role';
import { Guid } from 'guid-typescript';
import { UserAuthService } from '../LoginFiles/_services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseURL = "http://localhost:8080/hr_management/role";
  constructor(private httpClient:HttpClient, private userAuthService:UserAuthService) { }

  getRoleList(): Observable<Role[]>{
    return this.httpClient.get<Role[]>(`${this.baseURL+"/getAll"}`);
  }
  addRole(role: Role): Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/addRole"}`, role);
  }
  getRoleById(roleId: Guid): Observable<Role>{
    return this.httpClient.get<Role>(`${this.baseURL+"/id"}/${roleId}`);
  }
  updateRole(roleId: Guid, role: Role): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"/updateRole"}/${roleId}`, role);
  }
  getRoleByUserId(userId:Guid):Observable<Role[]>{
    return this.httpClient.get<Role[]>(`${this.baseURL+"/getRoleByUserId"}/${userId}`);
  }
  deleteRole(roleId: Guid):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"/delete"}/${roleId}`);
  }
  getRoleByName(roleName: String): Observable<Role>{
    return this.httpClient.get<Role>(`${this.baseURL+"/name"}/${roleName}`);
  }
}