import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../../User/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { User } from '../../User/user';
import { IUser } from './IUser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RoleService } from 'src/app/Roles/role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  helper = new JwtHelperService();

  currentUser: IUser = {
    username: null!,
    roles: null!,
    userId:null!,
  };

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  userId:Guid;
  user: User= new User();
  
  
  constructor(private userService: UserService, private userAuthService:UserAuthService, private router:Router, private roleService : RoleService,
    // private apiService: ApiServiceService, private authService: AuthService, 
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  login(loginForm: NgForm){

    this.userService.login(loginForm.value).subscribe((response=>{
debugger;
      let res: any = response;
      // this.currentUser.username = decodedToken.username;
     localStorage.setItem("jwtToken", res.jwt);
     const decodedToken = this.helper.decodeToken(res.jwt);
     console.log(decodedToken);
     let bbb= this.userAuthService.getToken();
     console.log(bbb);


     this.currentUser.username=decodedToken.sub;
     this.currentUser.userId=decodedToken.userId;
     this.currentUser.roles=decodedToken.roles;
     this.userAuthService.setRoles(decodedToken.roles);
     console.log(decodedToken.Roles);

    // const getRole= this.roleService.getRoleById(decodedToken.roles).subscribe(data=>{
    //   if(data.roleName=='Admin'){
    //     this.router.navigate(['admin']);
    //   }
    // });
     

     console.log(decodedToken.roles);
     const role = decodedToken.roles[0];
     console.log(role)
     this.userAuthService.getRoles();
     //const role = this.currentUser.role
    //  this.userAuthService.setUserId(res.user.userId);

    this.router.navigate(['profile', this.currentUser.userId]);
    
    //  this.navigateToProfile(decodedToken.userId);
    // if(role=== 'Admin'){
    //   this.router.navigate(['/admin']);
    //   // this.userAuthService.getUserId();
    //   //  this.userId= this.route.snapshot.params['userId'];
    //   //  this.navigateToProfile(this.userId);
    // }else{
    //   this.router.navigate(['/project-list']);
    // }
    //  if(role=== 'Admin'){
    //     this.router.navigate(['/users']);
    //  }else{
    //         this.router.navigate(['/project-list']);
    //       }
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




// public roleMatch(allowedRoles):boolean{
//   let isMatch: boolean = false;
//   // const userRoles:any=this.userAuthService.getRoles();
//   const userRoles:any=this.roleService.getRoleById(decodedToken.Roles)

//   if(userRoles !=null && userRoles){
//     for(let i = 0; i < userRoles.length; i++){
//       for(let j=0; j<allowedRoles.length; j++){
//         if(userRoles[i].roleName === allowedRoles[j]){
//           isMatch=true;
//           return isMatch;
//         }else
//         {
//           return isMatch;
//         }
//       }
//     }
//   }
//   return isMatch;
// }

}
