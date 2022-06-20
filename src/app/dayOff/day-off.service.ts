import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { Status } from '../enums/status';
import { DayOff } from './dayOff';

@Injectable({
  providedIn: 'root'
})
export class DayOffService {

  private baseURL="http://localhost:8080/hr_management/dayOff";
  constructor(private httpClient: HttpClient) { }

  placeDayOffRequest(dayOff: DayOff, userId:Guid): Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/placeDayOffRequest"}`, dayOff);
  }
  showDayOffRequestList():Observable<DayOff[]>{
    return this.httpClient.get<DayOff[]>(`${this.baseURL+"/getAllDaysOff"}`)
  }
  showDayOffRequestByUserId(userId:Guid): Observable<DayOff[]>{
    return this.httpClient.get<DayOff[]>(`${this.baseURL+"/dayOff"}/${userId}`);
  }
  // approveDayOff(status: Status, dayOffId:Guid):Observable<Object>{
  //   return this.httpClient.patch(`${this.baseURL+"/approveDayOff"}/${dayOffId}`, status);
  // }
//   approveDayOff( ):Observable<Object>{
//     return this.httpClient.patch(`${this.baseURL+"/approveDayOff"}/${userId}/dayOffId/${dayOffId}`, null);
//   }
 }
