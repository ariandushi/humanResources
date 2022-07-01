import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
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
import { EducationService } from '../Education/education.service';
import { PersonalFilesService } from '../Personal Files/personal-files.service';
import { PersonalFile } from '../Personal Files/personalFile';
import { Education } from '../Education/education';
import { filter } from 'rxjs';
import { Task } from '../Task/task';
import { TaskService } from '../Task/task.service';


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
  expId:Guid;
  certificationID:Guid;
  addressID:Guid;
  educationId: Guid;
  personalFileId: Guid;
  address: Address=new Address();
  addresses: Address[];
  user: User=new User();
  experience: Experience=new Experience();
  experiences: Experience[];
  certifications: Certification[];
  certification: Certification = new Certification();
  project: Project=new Project();
  projects: Project[];
  dayOff:DayOff= new DayOff();
  daysOff: DayOff[];
  education: Education=new Education();
  educations: Education[];
  personalFile: PersonalFile = new PersonalFile();
  personalFiles: PersonalFile[];
  kot:any;
  tasks: Task[];
  task:Task;
  taskId:Guid;
  constructor(private userService: UserService, private router: Router,
     public route: ActivatedRoute,
     private experienceService: ExperienceService, private addressService:AddressService,
     private certificationsService: CertificationsService,
     private projectService: ProjectService, private dayOffService: DayOffService,
     private educationService: EducationService,
     private personalFileService: PersonalFilesService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    console.log(this.userId);
    //;
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
    this.projectService.getProjectsByUserId(this.userId).subscribe(data=>{
      this.projects=data;
    }, error=> console.log(error));
    this.addressService.getAddressByUserId(this.userId).subscribe(data=>{
      this.addresses=data;
      console.log(this.address);
    }, error=> console.log(error));
    this.dayOffService.showDayOffRequestByUserId(this.userId).subscribe(data=>{
      this.daysOff=data;
      console.log(this.daysOff);
    }, error=> console.log(error));

    this.educationService.getEducationByUserId(this.userId).subscribe(data => {
      this.educations = data;
      console.log(data);
    }, error=>console.log(error));

    this.personalFileService.getPersonalFileByUserId(this.userId).subscribe(data => {
      this.personalFiles = data;
      console.log(data);
    }, error=>console.log(error));

    this.taskService.getTaskByUserId(this.userId).subscribe(data=>{
      this.tasks=data;
    }, error=> console.log(error));
    if(localStorage.getItem('selectedTabID')){
      const elementId = localStorage.getItem('selectedTabID');
      console.log(elementId );
      
      this.kot = document.getElementById(elementId ? elementId : 'tab1') as HTMLInputElement;
      console.log(this.kot , "element")
      if(this.kot){
        this.kot!.checked = true;
      }
      
    }

    console.log(this.route.snapshot.params['selected'])
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
    console.log(event ," eventtt")
  });
  }
 /* private getUser(userId: string=uuid()){
    this.userService.getUserById(this.userId).subscribe(data=>{
      this.user=data;
    })
  }*/
  updateUser(userId:Guid){
    this.router.navigate(['/update-user', userId]);
  }
  navigateToProfile(userId:Guid){
    this.router.navigate(['/profile', userId]);
  }


  addEducation(userId:Guid){
    this.router.navigate(['add-education', userId],{queryParams:{selectedTabID :  document.querySelectorAll('input:checked')[0].id}});
  }
  updateEducationById(educationId:Guid){
    this.router.navigate(['update-education', educationId]);
  }
  deleteEducation(educationId:Guid){
    this.educationService.deleteEducation(educationId).subscribe(data=>{
      this.educationService.getEducationByUserId(this.userId).subscribe(data=>{
      this.educations=data;
      });
    }, error=>console.log(error));
  }
  addPersonalFile(userId:Guid){
    this.router.navigate(['add-personal-file', userId]);
    localStorage.setItem('selectedTabID' , document.querySelectorAll('input:checked')[0].id );
  }
  updatePersonalFileById(personalFileId:Guid){
    this.router.navigate(['update-personal-file', personalFileId]);
  }
  deletePersonalFile(personalFileId:Guid){
    this.personalFileService.deletePersonalFile(personalFileId).subscribe(data=>{
      this.personalFileService.getPersonalFileByUserId(this.userId).subscribe(data=>{
      this.personalFiles=data;
      });
    }, error=>console.log(error));
  }

  addExperience(userId:Guid){
    this.router.navigate(['add-experience', userId]);
    localStorage.setItem('selectedTabID' , document.querySelectorAll('input:checked')[0].id );
  }
  updateExperienceByExpId(expId:Guid){
    this.router.navigate(['update-experience', expId]);
  }
  deleteExperience(expId:Guid){
    this.experienceService.deleteExperience(expId).subscribe(data=>{
      this.experienceService.getExperienceByUserId(this.userId).subscribe(data=>{
        this.experiences=data;})
    }, error=>console.log(error));
  }
  // getAddressById(){
  //   this.addressID = this.route.snapshot.params['addressID'];
  //   this.addressService.getAddressByAddressId(this.addressID).subscribe(data=>{
  //     this.address=data;
  //   }, error=>console.log(error));
  // }

  addAddress( userId:Guid){
    this.router.navigate(['add-address', userId]);
    }
   updateAddress(addressID:Guid){
      this.router.navigate(['update-address', addressID]);
    }
    deleteAddress(addressID:Guid){
      this.addressService.deleteAddress(addressID).subscribe(data=>{
        this.addressService.getAddressByUserId(this.userId).subscribe(data=>{
          this.addresses=data;})
      }, error=>console.log(error));
    }

  onClick(){
    this.isButtonVisible=!this.isButtonVisible;
  }

  addCertification(userId:Guid){
    this.router.navigate(['add-certifications', userId]);
  }
  updateCertificationByCertificationId(certificationID:Guid){
    this.router.navigate(['update-certifications', certificationID]);
  }
  deleteCertification(certificationID:Guid){
    this.certificationsService.deleteCertification(certificationID).subscribe(data=>{
      this.certificationsService.getCertificationByUserId(this.userId).subscribe(data=>{

      this.certifications=data;
      });
    }, error=>console.log(error));
  }
  finishedTask(taskId:Guid){
    this.taskService.finishedTask(taskId).subscribe(data=>{
      this.taskService.getTaskByUserId(this.userId).subscribe(data=>{
        this.tasks=data;
      });
    });
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
  deleteDayOff(dayOffId:Guid){
    this.dayOffService.deleteDayOff(dayOffId).subscribe(data=>{
      this.dayOffService.showDayOffRequestByUserId(this.userId).subscribe(data=>{
        this.daysOff=data;})
    }, error=>console.log(error));
  }

  checkStatus(){
    console.log(this.user.usersStatus);
    if(this.user.usersStatus===true){
      return true;
    }else{
      return false;
    }
  }
  reloadCurrentPage(){
    window.location.reload();
  }
}
