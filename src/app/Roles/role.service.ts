import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { Role } from './role';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  requestHeader = new HttpHeaders({'No-Auth':'True'})
  private baseURL = "http://localhost:8080/hr_management/roles";
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
    return this.httpClient.get<Role[]>(`${this.baseURL+"/getRoleByUser"}/${userId}`);
  }
  deleteRole(roleId: Guid):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"/deleteRole"}/${roleId}`);
  }
  getRoleByName(roleName: String): Observable<Role>{
    return this.httpClient.get<Role>(`${this.baseURL+"/name"}/${roleName}`);
  }
}
