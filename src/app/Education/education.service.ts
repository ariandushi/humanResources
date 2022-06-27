import { Observable } from 'rxjs';
import { Guid } from 'guid-typescript';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Education } from './education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private baseURL="http://localhost:8080/hr_management/education";

  constructor(private httpClient: HttpClient) { }

  addEducation(education: Education):Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/addNewEducation"}`, education);
  }
  getEducationByUserId(userId: Guid): Observable<Education[]>{
    return this.httpClient.get<Education[]>(`${this.baseURL+"/getEducationByUserId"}/${userId}`);
  }
  getEducationById(educationId: Guid): Observable<Education>{
    return this.httpClient.get<Education>(`${this.baseURL+"/getEducationById"}/${educationId}`);
  }
  getEducations(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(`${this.baseURL+"/getAll"}`);  
  }
  updateEducation(educationId: Guid, education: Education): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"/updateEducation"}/${educationId}`, education);
  }
  deleteEducation(educationId: Guid): Observable<Education>{
    return this.httpClient.delete<Education>(`${this.baseURL+"/delete"}/${educationId}`);
  }
}