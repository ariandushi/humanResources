import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { DayOffService } from '../dayOff/day-off.service';
import { DayOff } from '../dayOff/dayOff';
import { Status } from '../enums/status';
import { User } from '../User/user';
import { UserService } from '../User/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public status: string;
  public statusTypes = Object.values(Status);
  theStatus: Status;
  daysOff: DayOff[];
  userId:Guid;
  dayOffId:Guid;
  user:User=new User();
  users: User[];
  dayOff: DayOff=new DayOff();
  constructor(private dayOffService:DayOffService, private route: ActivatedRoute,private userService: UserService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];

    this.userService.getUsersList().subscribe(data=>{
      this.users=data;
    },error=>console.log(error));
    this.getDaysOff();
    // this.status = 'klajid';
    // console.log(this.statusTypes)
  }

  getDaysOff(){
    this.dayOffService.showDayOffRequestList().subscribe(data=>{
      this.daysOff=data;
    },error=>console.log(error));
  }

  changeStatus(e:any){
    this.dayOff=e;
  }
  // updateStatus(dayOff:DayOff){
  //   this.dayOffService.approveDayOff(this.user.userId,this.dayOff.dayOffId).subscribe(data=>{
  //     console.log(data);
  //   },error=>console.log(error));
  // }

  getThis(e){
    this.status = Status.PENDING
    // console.log(status);
  }
}