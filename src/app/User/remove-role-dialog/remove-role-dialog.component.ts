import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Role } from 'src/app/Roles/role';
import { RoleService } from 'src/app/Roles/role.service';
import { UserService } from '../user.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-remove-role-dialog',
  templateUrl: './remove-role-dialog.component.html',
  styleUrls: ['./remove-role-dialog.component.scss']
})
export class RemoveRoleDialogComponent implements OnInit {

  userId: Guid;
  roles: Role[];
  roleId: Guid;
  user: User = new User();
  constructor(private roleService: RoleService, private userService: UserService, private route: ActivatedRoute , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.userId = this.data.userId;
      this.roleService.getRoleByUserId(this.userId).subscribe(data=>{
        this.roles=data;
      })
  }
  saveRole() {
    console.log("Role: ", this.roleId, this.data.userId);
    this.userService.removeRoleFromUser(this.data.userId, this.roleId).subscribe(res => console.log(res));
  }
}