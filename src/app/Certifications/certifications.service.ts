import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { Certification } from './certification';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  private baseURL="http://localhost:8080/api/v1/hr_management_system/certifications/";
  constructor(private httpClient: HttpClient) { }

  addCertification(certification: Certification, userId:Guid): Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"addNewCertification"}`, certification);
  }
  getCertifications():Observable<Certification[]>{
    return this.httpClient.get<Certification[]>(`${this.baseURL+"getAll"}`);
  }
  getCertificationByCertificationId(certificationId:Guid): Observable<Certification>{
    return this.httpClient.get<Certification>(`${this.baseURL+"getCertificationById"}/${certificationId}`);
  }
  getCertificationByUserId(userId:Guid): Observable<Certification>{
    return this.httpClient.get<Certification>(`${this.baseURL+"getCertificationByUserId"}/${userId}`);
  }
  editCertification(certificationId:Guid, certification:Certification):Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"editCertification"}/${certificationId}`, certification);
  }
  deleteCertification(certificationId:Guid):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"deleteCertification"}/${certificationId}`);
  }
}
