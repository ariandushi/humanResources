import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../User/user.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private userAuthService:UserAuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm){
    this.userService.login(loginForm.value).subscribe((res: any)=>{
      // console.log(res.jwtToken);
      // console.log(res.user.role);

      this.userAuthService.setRoles(res.user.role);
      this.userAuthService.setToken(res.jwtToken);

      // const role = res.user.role[0].roleName;
      // if(role==='Admin'){
      //   this.router.navigate(['/admin']);
      // }else{
      //   this.router.navigate(['/user']);

      // }
    }, (error)=>console.log(error));
  }
}
