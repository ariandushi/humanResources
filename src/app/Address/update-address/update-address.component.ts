import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss']
})
export class UpdateAddressComponent implements OnInit {

  addressID: Guid;
  address: Address = new Address();
  constructor(private addressService:AddressService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.addressID = this.route.snapshot.params['addressID'];

    this.addressService.getAddressByAddressId(this.addressID).subscribe(data => {
      this.address = data;
    }, error=>console.log(error));
  }
  onSubmit(){
    this.addressService.editAddress(this.addressID, this.address).subscribe( data =>{
      
      this.router.navigate(['profile', this.address.userId]);
    }
    , error => console.log(error));
  }
}