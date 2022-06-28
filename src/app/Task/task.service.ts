import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { Task } from 'c:/Users/Arian/Desktop/frontend/humanResources/src/app/Task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseURL="http://localhost:8080/hr_management/task";

  constructor(private httpClient: HttpClient) { }

  addTask(task: Task):Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/newTask"}`, task);
  }
  getTaskByUserId(userId: Guid): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL+"/userId"}/${userId}`);
  }
  getTaskByProjectId(projectId: Guid): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL+"/projectId"}/${projectId}`);
  }
  getTaskById(taskId: Guid): Observable<Task>{
    return this.httpClient.get<Task>(`${this.baseURL+"/getTaskById"}/${taskId}`);
  }
  
  finishedTask(taskId: Guid):Observable<Object>{
    return this.httpClient.patch(`${this.baseURL+"/finishedTask"}/${taskId}`, null);
  }
  assignUserToTask(taskId: Guid, userId:Guid):Observable<Object>{
    return this.httpClient.patch(`${this.baseURL+"/assignTask"}/${taskId}/userId/${userId}`, null);
  }
  deleteTask(taskId: Guid): Observable<Task>{
    return this.httpClient.delete<Task>(`${this.baseURL+"/deleteTask"}/${taskId}`);
  }
  
}