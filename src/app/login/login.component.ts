import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserAuthService } from '../_services/user-auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { User } from '../User/user';
import { UserService } from '../User/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  userId:Guid;
  user: User= new User();
  
  
  constructor(private userService: UserService, private userAuthService:UserAuthService, private router:Router,
    // private apiService: ApiServiceService, private authService: AuthService, 
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  login(loginForm: NgForm){

    this.userService.login(loginForm.value).subscribe((response=>{
     
     let res: any = response
     localStorage.setItem("jwtToken", res.jwt)
     this.userAuthService.setRoles(res.user.roles)
     const role= res.user.roles[0].roleName;
    //  if(role=== 'Admin'){
    //     this.router.navigate(['/users']);
    //  }else{
    //         this.router.navigate(['/project-list']);
    //       }


    // this.userId= this.route.snapshot.params['userId'];
    // this.navigateToProfile(this.userId);
    }));
  }

  navigateToProfile(userId:Guid){
    this.router.navigate(['profile', userId]);
  }
  //   this.userService.login(loginForm.value).subscribe((res: any)=>{
  //     console.log(res.jwtToken);
  //     console.log(res.user.role);

  //     console.log(res);
  //     this.userAuthService.setRoles(res.user.role);
  //     this.userAuthService.getRoles();

  //     this.userAuthService.setToken(res.jwtToken);

  //     debugger;
  //     const role = res.user.roles[0].roleName;
  //     if(role==='Admin'){
  //       this.router.navigate(['/admin1']);
  //     }else{
  //       this.router.navigate(['/project-list']);

  //     }
  //   }, (error)=>console.log(error));
  // }

  // submitForm() {
  //   if (this.form.invalid) {
  //     return;
  //   }

  //   this.authService
  //     .login(this.form.get('username')?.value, this.form.get('password')?.value)
  //     .subscribe((response) => {
  //       this.router.navigate(['/project-list']);
  //     });
  // }

//   proceedLogin(){
//     if(this.form.valid){

//     }
//   }
}