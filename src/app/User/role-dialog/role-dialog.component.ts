import { Guid } from 'guid-typescript';
import { RoleService } from './../../Roles/role.service';
import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/Roles/role';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-role-dialog',
  templateUrl: './role-dialog.component.html',
  styleUrls: ['./role-dialog.component.scss']
})
export class RoleDialogComponent implements OnInit {

  roles: Role[];
  roleId: Guid;
  constructor(private roleService: RoleService, private userService: UserService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.roleService.getRoleList().subscribe(data=>{
        this.roles=data;
    })
  }
  saveRole() {
    console.log("Role: ", this.roleId, this.data.userId);
    this.userService.assignRoleToUser(this.data.userId, this.roleId).subscribe(res => console.log(res));
  }

  
}