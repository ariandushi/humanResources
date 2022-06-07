import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  address: Address= new Address();
  constructor(private addressService: AddressService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.address)
  this.addressService.addNewAddress(this.address).subscribe(data=>{
    console.log(data);
    this.goToAddressList();
  }, error=> console.log(error))
}

goToAddressList(){
  this.router.navigate(['/user-address']);
}

}
