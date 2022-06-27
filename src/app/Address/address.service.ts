import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from './address';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseURL='http://localhost:8080/hr_management/address';
  constructor(private httpClient: HttpClient) { }

  getAddressList():Observable<Address[]>{
    return this.httpClient.get<Address[]>(`${this.baseURL+"/getAll"}`);
  }
  addNewAddress(address: Address, userId:Guid):Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/addNewAddress"}`, address);
  }
  getAddressByAddressId(addressID:Guid):Observable<Address>{
    return this.httpClient.get<Address>(`${this.baseURL+"/getAddressById"}/${addressID}`);
  }
  getAddressByUserId(userId:Guid):Observable<Address[]>{
    return this.httpClient.get<Address[]>(`${this.baseURL+"/getAddressByUserId"}/${userId}`);
  }
  editAddress(addressID:Guid,address: Address): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"/editAddress"}/${addressID}`,address);
  }
  deleteAddress(addressID: Guid): Observable<Address>{
    return this.httpClient.delete<Address>(`${this.baseURL+"/deleteAddress"}/${addressID}`);
  }

  // assignUserToAddress(addressID:Guid, userId:Guid): Observable<Object>{
  //   return this.httpClient.patch(`${this.baseURL+"assignUser"}/${addressID}/userId/${userId}`, null);
  // }
}
