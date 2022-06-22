import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from './experience';
import { v4 as uuid} from 'uuid';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private baseURL="http://localhost:8080/hr_management/experience";

  constructor(private httpClient: HttpClient) { }

  addExperience(experience: Experience, userId:Guid):Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/addExperiences"}`, experience);
  }
  getExperienceByUserId(userId: Guid): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(`${this.baseURL+"/experiences/getExperiencesByUserId"}/${userId}`);
  }
  getExperienceByExpId(expId: Guid): Observable<Experience>{
    return this.httpClient.get<Experience>(`${this.baseURL+"/experiences/getExperiencesByExpId"}/${expId}`);
  }
 /* getExperienceByExpId(expId: string = uuid()): Observable<Experience>{
    return this.httpClient.get<Experience>(`${this.baseURL+"/experiences"}/${expId}`);
  }*/
  getExperiences(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(`${this.baseURL+"/experiences"}`);
  }
  updateExperienceByExpId(expId:Guid, experience: Experience): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"/experiences/updateExperience"}/${expId}`, experience);
  }
  deleteExperience(expId: Guid): Observable<Experience>{
    return this.httpClient.delete<Experience>(`${this.baseURL+"/experiences/deleteExperience"}/${expId}`);
  }

}
