import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../User/user';
import { UserService } from '../../User/user.service';
import { v4 as uuid } from 'uuid';
import { Guid } from 'guid-typescript';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  userId:Guid;
  username:string;
  user:User= new User();
  constructor(private userService:UserService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
   // ;
    this.userService.getWholeUserByUserId(this.userId).subscribe(data => {
      
      this.user = data;
    }, error =>console.log(error));
  }
  
  /*updateUser(){
    this.userService.updateUser(this.userId, this.user)
    .subscribe(data=>{
      console.log(data);
      this.user= new User();
      this.goToUserList;
    }, error => console.log(error));
  }*/
  
  onSubmit(){
    debugger;
    // let d = new Date();
    // new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - d.getTimezoneOffset()).toISOString();
    // var temp =(moment.utc(local.date));

    this.userService.updateUser(this.userId, this.user).subscribe( data =>{
      this.goToUserProfile(this.userId);
    }
    , error => console.log(error));
  }
 /* ngOnInit(): void {
    this.user= new User();
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserByUsername(this.username)
    .subscribe(data=>{
      this.user=data;
    }, error =>console.log(error));
  }*/

 /* updateUserUsername(){
    this.userService.updateUserUsername(this.username, this.user)
    .subscribe(data=>{
      console.log(data);
      this.user= new User();
      this.goToUserList;
    }, error => console.log(error));
  }*/

  /*onSubmit(){
    this.userService.updateUserUsername(this.username, this.user).subscribe( data =>{
      this.goToUserList();
    }
   , error => console.log(error));
  }*/
  goToUserProfile(userId: Guid){
    this.router.navigate(['profile', userId]);
  }

  changeStatus(v){
    this.user.usersStatus=v.value;
  }

}
