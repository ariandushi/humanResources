import { RemoveRoleDialogComponent } from './../remove-role-dialog/remove-role-dialog.component';

import { RoleDialogComponent } from './../role-dialog/role-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../User/user.service';
import{User} from '../../User/user'
import { Guid } from 'guid-typescript';
import { Project } from 'src/app/Project/project';
import { ProjectService } from 'src/app/Project/project.service';
import { Role } from 'src/app/Roles/role';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  openRoleDialog(userId: Guid) {
    const dialogRef = this.dialog.open(RoleDialogComponent, {data: {
      userId,
    }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getUsers();
    });
  }

  openRemoveRoleDialog(userId: Guid) {
    console.log(userId);
    const dialogRef = this.dialog.open(RemoveRoleDialogComponent, {data: {
      userId,
    }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getUsers();
    });
  }
  userId:Guid;
  projectId:Guid;
  users : User[];
  user:User;
  project: Project=new Project();
  projects: Project[];
  roleName: String;
  role: Role=new Role();
  roles: Role[];
  constructor(public dialog: MatDialog, private userService: UserService, private router: Router, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getUsers();
  this.projectService.getProjectList().subscribe(data=>{
    this.projects=data;
  })
  }
  private getUsers(){
    this.userService.getUsersList().subscribe(data=> {
      this.users=data;
    });
  }
  updateUser(userId: Guid){
    this.router.navigate(['update-user', userId]);
  }
  navigateToProfile(userId:Guid){
    this.router.navigate(['profile', userId]);
  }
  navToPro(userId:Guid){
    this.router.navigate(['update-certifications', userId]);
  }
  addUser(){
    this.userService.addUser(this.user).subscribe(data=>{
      console.log(data);
    }, error=> console.log(error));
    this.router.navigate(["/add-user"]);
  }
  reloadCurrentPage(){
    window.location.reload();
  }
}
