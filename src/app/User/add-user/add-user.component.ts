import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../User/user.service';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  isActive:boolean = false;
  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.addUser(this.user).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    }, error=> console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
}
