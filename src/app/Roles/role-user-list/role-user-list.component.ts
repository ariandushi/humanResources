import { UserService } from 'src/app/User/user.service';
import { RoleService } from './../role.service';
import { ActivatedRoute } from '@angular/router';
import { Role } from './../role';
import { Guid } from 'guid-typescript';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User/user';

@Component({
  selector: 'app-role-user-list',
  templateUrl: './role-user-list.component.html',
  styleUrls: ['./role-user-list.component.scss']
})
export class RoleUserListComponent implements OnInit {

  roleId: Guid;
  role: Role = new Role();
  users: User[];

  constructor(private route: ActivatedRoute, private roleService: RoleService, private userService: UserService) { }

  ngOnInit(): void {
    this.roleId = this.route.snapshot.params['roleId'];
    this.roleService.getRoleById(this.roleId).subscribe(data=>{
      this.role = data;
    }, error=> console.log(error));

    this.userService.getUsersByRoleId(this.roleId).subscribe(data=>{
      this.users = data;
    }, error=> console.log(error));
  }

}