import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { DayOffPermission } from 'src/app/enums/dayOffPermission';
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';
import { DayOffService } from '../day-off.service';
import { DayOff } from '../dayOff';

@Component({
  selector: 'app-place-day-off-request',
  templateUrl: './place-day-off-request.component.html',
  styleUrls: ['./place-day-off-request.component.scss']
})
export class PlaceDayOffRequestComponent implements OnInit {

  userId:Guid;
  user:User=new User();
  dayOff: DayOff = new DayOff();
  constructor(private userService:UserService, private route: ActivatedRoute, private dayOffService: DayOffService, private router: Router) { }

  ngOnInit(): void {
    this.userId=this.route.snapshot.params['userId'];
    this.dayOff.userId= this.userId;
    this.userService.getUserById(this.userId).subscribe(data=>{
      this.user=data;
    },error=>console.log(error));
  }

  placeDayOffRequest(){
    ;
    this.dayOffService.placeDayOffRequest(this.dayOff).subscribe(data=>{
      console.log(data);
      this.goToUserProfile(this.userId);
    }, error=>console.log(error));
  }
  goToUserProfile(userId:Guid){
    this.router.navigate(['/profile', userId]);
  }
  public changeStatus(value){
  this.dayOff.dayOffPermission = value.value;
  }
  onSubmit(){
    this.placeDayOffRequest();
    this.goToUserProfile(this.userId);
  }
}
