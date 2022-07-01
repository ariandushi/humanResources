import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Guid } from 'guid-typescript';
import { DayOffService } from '../dayOff/day-off.service';
import { DayOff } from '../dayOff/dayOff';
import { StatusDto } from '../DTO/status.dto';
import { DayOffStatus } from '../enums/dayOffStatus';
import { UserAuthService } from '../LoginFiles/_services/user-auth.service';
import { User } from '../User/user';
import { UserService } from '../User/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  helper = new JwtHelperService();
  // public statusTypes = Object.values(DayOffStatus);
  statusDTO: StatusDto = new StatusDto();
  daysOff: DayOff[];
  userId:Guid;
  dayOffId:Guid;
  user:User=new User();
  users: User[];
  dayOff: DayOff;
  dayOffStatus: DayOffStatus;
  constructor(private dayOffService:DayOffService, private route: ActivatedRoute,private userService: UserService,private userAuthService: UserAuthService,
    private router: Router) { let bbb =this.userAuthService.getToken();
      const decodedToken = this.helper.decodeToken(bbb);
      console.log(decodedToken);
      this.userService.getUserById(decodedToken.userId).subscribe(data=>{
        this.user=data;
        console.log(this.user);
      });
      }

  ngOnInit(): void {
    // this.u/serId = this.route.snapshot.params['userId'];

    let bbb =this.userAuthService.getToken();
    const decodedToken = this.helper.decodeToken(bbb);
    console.log(decodedToken);
    this.userService.getUserById(decodedToken.userId).subscribe(data=>{
      this.user=data;
      console.log(this.user);
    });
    // // merr token nga localstorage , shif rolin
    // //nqs nuk esht admin beje logout
    this.userService.getUsersList().subscribe(data=>{
      this.users=data;
    },error=>console.log(error));
    this.getDaysOff();
  }

  getDaysOff(){
    this.dayOffService.showDayOffRequestList().subscribe(data=>{
      this.daysOff=data;debugger;
    },error=>console.log(error));
  }


  // updateStatus(dayOff:DayOff){
  //   this.dayOffService.approveDayOff(this.user.userId,this.dayOff.dayOffId).subscribe(data=>{
  //     console.log(data);
  //   },error=>console.log(error));
  // }
  approveRequest(dayOff:DayOff){
    let requestBody: StatusDto = new StatusDto();
    ; 
    requestBody.dayOffId=dayOff.dayOffId;
    requestBody.userId=this.user.userId;
    requestBody.requestStatus=this.statusDTO.requestStatus;
    requestBody.rejectReason=dayOff.rejectReason;
    this.dayOffService.approveDayOff(requestBody).subscribe(data=>{
     
      // console.log(this.statusi);
      console.log(data);
    })
  }
  // onClickSend(statusi: {rejectReason: string, userId: Guid, dayOffId: Guid, status : DayOffStatus;}){
  //   console.log(statusi);
  // }

  public approveStatus(v){
    this.statusDTO.requestStatus=v.value;
  }
  navToDayOffId(dayOffId){
    this.dayOffService.getDayOffById(dayOffId).subscribe(data=>{

     });
     this.navToRequests(dayOffId);
  }
  navToRequests(dayOffId:Guid){
    // this.dayOffService.getDayOffById(dayOffId).subscribe(data=>{
      
    // })
    this.router.navigate(['day-off-requests', dayOffId])
  }

  // toArray(daysOff: object) {
  //   return Object.keys(daysOff).map(key => daysOff[key])
  // }
}