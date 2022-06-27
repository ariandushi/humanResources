import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../User/user.service';
import { UserAuthService } from '../LoginFiles/_services/user-auth.service';
import { LoginService } from '../LoginFiles/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../User/user';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  helper = new JwtHelperService();

  user: User

  constructor(
    private userAuthService: UserAuthService,
     private router: Router,public userService:UserService, public loginService: LoginService) { 

     }

  ngOnInit(): void {
    let bbb = this.userAuthService.getToken();
    const decodedToken = this.helper.decodeToken(bbb);
    this.userService.getUserById(decodedToken.userId).subscribe(data=>{
      this.user =data;
    });

  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/login']);
  }

  navToProfile(userId:Guid) {
    this.router.navigate(['/profile', userId]);  }
}
