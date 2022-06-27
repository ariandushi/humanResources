import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Guid } from 'guid-typescript';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserDTO } from '../userDTO';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  helper: JwtHelperService;
  username: String;
  userId:Guid;
  user: User= new User();
  userDTO: UserDTO= new UserDTO();
  constructor(private route: ActivatedRoute, private userService:UserService, private router: Router) { }

  ngOnInit(): void {
    

    this.userId= this.route.snapshot.params['userId'];
    this.userService.getPasswordDTO(this.userId).subscribe(data=>{
      this.userDTO=data;
      console.log(this.userDTO);
    },error=>console.log(error));
  }


  onSubmit(){
    // ;
    this.userService.changePassword(this.userDTO).subscribe(data=>{
      console.log(data);
      console.log("success");
    })
    this.navigateToProfile(this.userId);
  }

  navigateToProfile(userId:Guid){
    this.router.navigate(['profile', userId]);

  }
}
