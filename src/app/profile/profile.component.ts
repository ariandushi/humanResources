import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { User } from '../User/user';
import { UserService } from '../User/user.service';
import { Guid } from 'guid-typescript';
import { ExperienceService } from '../Experience/experience.service';
import { Experience } from '../Experience/experience';
import { Address } from '../Address/address';
import { AddressService } from '../Address/address.service';
import { HttpResponse,HttpClient } from '@angular/common/http';
import { Certification } from '../Certifications/certification';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isButtonVisible:boolean = false;
  userId:Guid;
  expId:Guid;
  certificationID:Guid;
  addressID:Guid;
  address: Address=new Address();
  addresses: Address[];
  user: User=new User();
  experience: Experience=new Experience();
  experiences: Experience[];
  certifications: Certification[];
  certification: Certification = new Certification();
  constructor(private userService: UserService, private router: Router,
     public route: ActivatedRoute,
     private experienceService: ExperienceService, private addressService:AddressService,
     private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    //debugger;
    this.userService.getUserProfile(this.userId).subscribe(data => {
      
      this.user = data;
      //this.user.addressID
      this.searchAddress(Guid.parse("dadb3077-6469-4287-8743-6d835e55f956"))
    }, error =>console.log(error));

   // this.expId = this.route.snapshot.params['userId'];

    this.experienceService.getExperienceByUserId(this.userId).subscribe(data => {
      this.experiences = data;
    }, error=>console.log(error));
  }
 /* private getUser(userId: string=uuid()){
    this.userService.getUserById(this.userId).subscribe(data=>{
      this.user=data;
    })
  }*/
  updateUser(userId:Guid){
    this.router.navigate(['update-user', userId]);
  }
  navigateToProfile(userId:Guid){
    this.router.navigate(['profile', userId]);
  }
  addExperience(userId:Guid){
    this.router.navigate(['add-experience', userId]);
  }
  updateExperienceByExpId(expId:Guid){
    this.router.navigate(['update-experience', expId]);
  }
  deleteExperience(expId:Guid){
    this.experienceService.deleteExperience(expId).subscribe(data=>{
      this.experience=data;
    }, error=>console.log(error));
  }
  // getAddressById(){
  //   this.addressID = this.route.snapshot.params['addressID'];
  //   this.addressService.getAddressByAddressId(this.addressID).subscribe(data=>{
  //     this.address=data;
  //   }, error=>console.log(error));
  // }

  searchAddress( addressId:Guid){
    this.addressService.getAddressByAddressId(addressId).subscribe(res => {
      debugger;
    this.address=res
    });
    this.isButtonVisible=!this.isButtonVisible;
    }

  reloadCurrentPage(){
    window.location.reload();
  }
  visible:boolean=false;

  onClick(){
    this.isButtonVisible=!this.isButtonVisible;
  }

  addCertification(userId:Guid){
    this.router.navigate(['add-certifications', userId]);
  }


  // show:boolean = false;
  // addNewAddress(address: Address){
  //   this.show=true;
  // }



}
