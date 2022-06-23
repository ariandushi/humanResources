import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Tasks/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseURL="http://localhost:8080/hr_management/task";

  constructor(private httpClient: HttpClient) { }

  addTask(task:Task):Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/newTask"}`, task);
  }
  getTasksByProjectId(projectId: Guid): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL+"/projectId"}/${projectId}`);
  }
  getTasksByUserId(userId: Guid): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL+"/userId"}/${userId}`);
  }
  assignTaskToUser(task:Task):Observable<Object>{
    return this.httpClient.patch(`${this.baseURL+"/assignTask"}`, task);
  }
}
