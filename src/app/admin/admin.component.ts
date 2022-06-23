import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { DayOffService } from '../dayOff/day-off.service';
import { DayOff } from '../dayOff/dayOff';
import { StatusDto } from '../DTO/status.dto';
import { DayOffStatus } from '../enums/dayOffStatus';
import { User } from '../User/user';
import { UserService } from '../User/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // public statusTypes = Object.values(DayOffStatus);
  statusDTO: StatusDto = new StatusDto();
  daysOff: DayOff[];
  userId:Guid;
  dayOffId:Guid;
  user:User=new User();
  users: User[];
  dayOff: DayOff=new DayOff();
  constructor(private dayOffService:DayOffService, private route: ActivatedRoute,private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    // this.userId = this.route.snapshot.params['userId'];

    this.userService.getUsersList().subscribe(data=>{
      this.users=data;
    },error=>console.log(error));
    this.getDaysOff();
  }

  getDaysOff(){
    this.dayOffService.showDayOffRequestList().subscribe(data=>{
      this.daysOff=data;
      console.log(data);
    },error=>console.log(error));
  }


  // updateStatus(dayOff:DayOff){
  //   this.dayOffService.approveDayOff(this.user.userId,this.dayOff.dayOffId).subscribe(data=>{
  //     console.log(data);
  //   },error=>console.log(error));
  // }
  approveRequest(){
    debugger;
    this.dayOffService.approveDayOff(this.statusDTO).subscribe(data=>{
    debugger;  
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
}