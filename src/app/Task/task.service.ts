import { Task } from './task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseURL="http://localhost:8080/hr_management/task";

  constructor(private httpClient: HttpClient) { }

  addTask(task: Task):Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/addNewTask"}`, task);
  }
  getTaskByUserId(userId: Guid): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL+"/getByUserId"}/${userId}`);
  }
  getTaskByProjectId(projectId: Guid): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL+"/getByProjectId"}/${projectId}`);
  }
  getTaskById(taskId: Guid): Observable<Task>{
    return this.httpClient.get<Task>(`${this.baseURL+"/getTaskById"}/${taskId}`);
  }
  // updateEducation(educationId: Guid, education: Education): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL+"/updateEducation"}/${educationId}`, education);
  // }
  assignUserToTask(taskId:Guid, userId: Guid):Observable<Object>{
    return this.httpClient.patch(`${this.baseURL+"/assignUser"}/${taskId}/userId/${userId}`, null);
  }
  deleteTask(taskId: Guid): Observable<Task>{
    return this.httpClient.delete<Task>(`${this.baseURL+"/deleteTask"}/${taskId}`);
  }
}
