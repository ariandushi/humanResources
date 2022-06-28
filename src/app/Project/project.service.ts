import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';
import { Guid } from 'guid-typescript';
import { User } from '../User/user';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseURL="http://localhost:8080/hr_management/projects";
  constructor(private httpClient: HttpClient) { }

  addNewProject(project: Project): Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/addProject"}`, project);
  }
  getProjectList():Observable<Project[]>{
    return this.httpClient.get<Project[]>(`${this.baseURL+"/projects"}`);
  }
  getProjectByProjectId(projectId: Guid):Observable<Project>{
    return this.httpClient.get<Project>(`${this.baseURL+"/projects/id"}/${projectId}`);
  }
  getProjectByTask(taskId: Guid):Observable<Project>{
    return this.httpClient.get<Project>(`${this.baseURL+"/getByTask"}/${taskId}`);
  }
  updateProject(projectId:Guid, project: Project): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"/projects/updateProject"}/${projectId}`, project);
  }
  addUserToProject(projectId:Guid, project: Project, userId:Guid, user:User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"/projects/updateProject"}/${projectId}`, project);
  }
  getProjectsByUserId(userId: Guid): Observable<Project[]>{
    return this.httpClient.get<Project[]>(`${this.baseURL+"/projects"}/${userId}`);
  }
  // assignUserToProject(projectId:Guid, userId:Guid):Observable<Object>{
  //   return this.httpClient.patch(`${this.baseURL+"/assignUser"}/${projectId}/userId/${userId}`, null);
  // }
  assignUserToProject(projectId:Guid, username:string):Observable<Object>{
    return this.httpClient.patch(`${this.baseURL+"/assignUser"}/${projectId}/username/${username}`, null);
  }
  deleteProject(projectId:Guid):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"/projects/deleteProject"}/${projectId}`);
  }
  removeUserFromProject(projectId: Guid, userId: Guid): Observable<Object>{
    return this.httpClient.patch(`${this.baseURL+"/removeUser"}/${projectId}/userId/${userId}`, null);
  }
}
