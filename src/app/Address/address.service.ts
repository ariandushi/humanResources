import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from './address';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseURL='http://localhost:8080/api/v1/hr_management_system/addressess';
  constructor(private httpClient: HttpClient) { }

  getAddressList():Observable<Address[]>{
    return this.httpClient.get<Address[]>(`${this.baseURL+"/getAll"}`);
  }
  addNewAddress(address: Address):Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/addNewAddress"}`, address);
  }
  getAddressByAddressId(addressId:Guid):Observable<Address>{
    return this.httpClient.get<Address>(`${this.baseURL+"/id"}/${addressId}`);
  }
  editAddress(addressId:Guid,address: Address): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"/editAddress"}/${addressId}`,address);
  }

}
