import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { StatusDto } from '../DTO/status.dto';
import { DayOff } from './dayOff';

@Injectable({
  providedIn: 'root'
})
export class DayOffService {

  private baseURL="http://localhost:8080/hr_management/dayOff";
  constructor(private httpClient: HttpClient) { }

  placeDayOffRequest(dayOff: DayOff): Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/placeDayOffRequest"}`, dayOff);
  }
  showDayOffRequestList():Observable<DayOff[]>{
    return this.httpClient.get<DayOff[]>(`${this.baseURL+"/getAllDaysOff"}`)
  }
  showDayOffRequestByUserId(userId:Guid): Observable<DayOff[]>{
    return this.httpClient.get<DayOff[]>(`${this.baseURL+"/getUserDayOff"}/${userId}`);
  }
  approveDayOff(statusDTO: StatusDto):Observable<Object>{
    return this.httpClient.patch(`${this.baseURL+"/approveDayOff"}`, statusDTO);
  }
  getDayOffById(dayOffId:Guid): Observable<DayOff>{
    return this.httpClient.get<DayOff>(`${this.baseURL+"/getDayOff"}/${dayOffId}`);
  }
  deleteDayOff(dayOffId:Guid): Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseURL+"/delete"}/${dayOffId}`);
  }
//   approveDayOff( ):Observable<Object>{
//     return this.httpClient.patch(`${this.baseURL+"/approveDayOff"}/${userId}/dayOffId/${dayOffId}`, null);
//   }
 }
