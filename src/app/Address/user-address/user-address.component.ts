import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss']
})
export class UserAddressComponent implements OnInit {

  addressID:Guid;
  addresses:Address[];
  constructor(private addressService: AddressService,
    private router: Router) { }

  ngOnInit(): void {
    this.addressService.getAddressList().subscribe(data=>{
      this.addresses=data;
    });
  }

  addNewAddress(){
    this.router.navigate(['/add-address']);
  }

}
