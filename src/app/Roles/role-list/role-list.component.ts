import { UserService } from 'src/app/User/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from './../role.service';
import { User } from 'src/app/User/user';
import { Guid } from 'guid-typescript';
import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { LoginService } from 'src/app/LoginFiles/login.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  userId: Guid;
  user: User = new User();
  users: User[];
  roleId: Guid;
  role: Role = new Role();
  roles: Role[];
  constructor(private roleService: RoleService,
    private router: Router, private userService: UserService,
    private route: ActivatedRoute, public loginService: LoginService) { }

  ngOnInit(): void {
    this.roleService.getRoleList().subscribe(data=>{
      this.roles = data;
    })
    this.userService.getUsersList().subscribe(data=>{
      this.users = data;
    })
  }
  SelectedValue: Guid;
  chosenUser(e:any){
    this.user = e;
  }
  addRole(){
    this.router.navigate(["/add-role"]);
  }
  showUsers(roleId:Guid){
    this.router.navigate([`/role-user-list`, roleId]);
  }
  deleteRole(roleId:Guid){
    this.roleService.deleteRole(roleId).subscribe(data=>{
      console.log(data);
      this.roleService.getRoleList().subscribe(data=>{
        this.roles=data;
      });
    },error=>console.log(error));
  }

  reloadCurrentPage(){
    window.location.reload();
  }
}