import { PersonalFile } from './personalFile';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalFilesService {

  private baseURL="http://localhost:8080/hr_management/personalFile";

  constructor(private httpClient: HttpClient) { }

  addPersonalFile(personalFile: PersonalFile):Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/addNewPersonalFile"}`, personalFile);
  }
  getPersonalFileByUserId(userId: Guid): Observable<PersonalFile[]>{
    return this.httpClient.get<PersonalFile[]>(`${this.baseURL+"/getPersonalFileByUser"}/${userId}`);
  }
  getPersonalFileById(personalFileId: Guid): Observable<PersonalFile>{
    return this.httpClient.get<PersonalFile>(`${this.baseURL+"/getPersonalFile"}/${personalFileId}`);
  }
  getPersonalFiles(): Observable<PersonalFile[]>{
    return this.httpClient.get<PersonalFile[]>(`${this.baseURL+"/getAll"}`);  
  }
  updatePersonalFile(personalFileId: Guid, personalFile: PersonalFile): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"/editPersonalFile"}/${personalFileId}`, personalFile);
  }
  deletePersonalFile(personalFileId: Guid): Observable<PersonalFile>{
    return this.httpClient.delete<PersonalFile>(`${this.baseURL+"/deletePersonalFile"}/${personalFileId}`);
  }
}