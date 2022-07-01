import { Skill } from './skill';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from '../LoginFiles/_services/user-auth.service';
import { Observable } from 'rxjs';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseURL = "http://localhost:8080/hr_management/skill";
  constructor(private httpClient:HttpClient, private userAuthService:UserAuthService) { }

  getSkillList(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(`${this.baseURL+"/getAll"}`);
  }
  addSkill(skill: Skill): Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/addSkill"}`, skill);
  }
  getSkillById(skillId: Guid): Observable<Skill>{
    return this.httpClient.get<Skill>(`${this.baseURL+"/getSkillById"}/${skillId}`);
  }
  updateSkill(skill: Skill): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"/updateSkill"}`, skill);
  }
  getSkillByUserId(userId:Guid):Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(`${this.baseURL+"/getSkillByUserId"}/${userId}`);
  }
  deleteSkill(skillId: Guid):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"/delete"}/${skillId}`);
  }
  getSkillByName(skillName: String): Observable<Skill>{
    return this.httpClient.get<Skill>(`${this.baseURL+"/getSkillByName"}/${skillName}`);
  }
}