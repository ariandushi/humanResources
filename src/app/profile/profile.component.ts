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
import { CertificationsService } from '../Certifications/certifications.service';
import { Project } from '../Project/project';
import { ProjectService } from '../Project/project.service';
import { DayOffService } from '../dayOff/day-off.service';
import { DayOff } from '../dayOff/dayOff';
import { IUser } from '../LoginFiles/login/IUser';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  currentUser: IUser = {
    username: null!,
    roles: null!,
    userId:null!,
  };

  isButtonVisible:boolean = false;
  userId:Guid;
  addressId:Guid;
  expId:Guid;
  certificationID:Guid;
  addressID:Guid;
  address: Address=new Address();
  user: User=new User();
  experience: Experience=new Experience();
  experiences: Experience[];
  certifications: Certification[];
  certification: Certification = new Certification();
  project: Project=new Project();
  projects: Project[];
  dayOff:DayOff= new DayOff();
  dayOff1: DayOff[];
  constructor(private userService: UserService, private router: Router,
     public route: ActivatedRoute,
     private experienceService: ExperienceService, private addressService:AddressService,
     private certificationsService: CertificationsService,
     private projectService: ProjectService, private dayOffService: DayOffService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    console.log(this.userId);
    //debugger;
    this.userService.getWholeUserByUserId(this.userId).subscribe(data => {
      
      this.user = data;
      //this.user.addressID
    }, error =>console.log(error));

   // this.expId = this.route.snapshot.params['userId'];



    this.experienceService.getExperienceByUserId(this.userId).subscribe(data => {
     this.experiences=data
    }, error=>console.log(error));

    this.certificationsService.getCertificationByUserId(this.userId).subscribe(data => {
      this.certifications = data;
    }, error=>console.log(error));
    // this.projectService.getProjectsByUserId(this.userId).subscribe(data=>{
    //   this.projects=data;
    // }, error=> console.log(error));
    this.addressService.getAddressByUserId(this.userId).subscribe(data=>{
      this.address=data;
      console.log(this.address);
    }, error=> console.log(error));
    // this.dayOffService.showDayOffRequestByUserId(this.userId).subscribe(data=>{
    //   this.dayOff1=data;
    // }, error=> console.log(error));

    
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

  addAddress( userId:Guid){
    // this.addressService.getAddressByAddressId(addressID).subscribe(res => {
    //   debugger;
    // this.address=res
    // });
    // this.isButtonVisible=!this.isButtonVisible;

    this.router.navigate(['add-address', userId]);
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
  updateCertificationByCertificationId(certificationID:Guid){
    this.router.navigate(['update-certification', certificationID]);
  }
  deleteCertification(certificationID:Guid){
    this.certificationsService.deleteCertification(certificationID).subscribe(data=>{
      this.certification=data;
    }, error=>console.log(error));
  }

  addProjectToUser(userId:Guid){
    this.router.navigate(['add-project-to-user', userId]);
  }

  placeDayOff(userId:Guid){
    this.router.navigate(['place-day-off-request', userId]);
  }
  // show:boolean = false;
  // addNewAddress(address: Address){
  //   this.show=true;
  // }

  changePassword(userId:Guid){
    this.router.navigate(['change-password', userId]);
  }

}
