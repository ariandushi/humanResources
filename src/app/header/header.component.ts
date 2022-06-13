import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../User/user.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userAuthService: UserAuthService, private router: Router,public userService:UserService) { }

  ngOnInit(): void {
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }
  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/users']);
  }
}
