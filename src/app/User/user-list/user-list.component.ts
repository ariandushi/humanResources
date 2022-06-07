import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../User/user.service';
import{User} from '../../User/user'
import { v4 as uuid } from 'uuid';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users : User[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
   this.getUsers();
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(data=> {
      this.users=data;
    });
  }

  updateUser(userId: Guid){
    this.router.navigate(['update-user', userId]);
  }
  /*updateUserUsername(username){
    this.router.navigate(['update-user', username]);
  }*/
  // deleteUser(userId: Guid){
  //   this.userService.deleteUser().subscribe(data=>{
  //     console.log(data);
  //     this.getUsers();
  //   })
  // }
  navigateToProfile(userId:Guid){
    this.router.navigate(['profile', userId]);
  }
  

}
