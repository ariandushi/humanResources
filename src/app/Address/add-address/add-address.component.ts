import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  addressID:Guid;
  address: Address= new Address();
  userId: Guid;
  user: User=new User();
  constructor(private addressService: AddressService,
    private router: Router, private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.address.userId= this.userId;
    
    this.userService.getUserById(this.userId).subscribe(data=>{
    //  ;
      this.user=data;
    }, error=>console.log(error));
  }

  onSubmit(){
    console.log(this.address)
  this.addressService.addNewAddress(this.address, this.userId).subscribe(data=>{
    // ;
    console.log(data);
    this.goToAddressList(this.userId);
  }, error=> console.log(error))
}

  goToAddressList(userId:Guid){
  this.router.navigate(['profile', userId]);
  }
}