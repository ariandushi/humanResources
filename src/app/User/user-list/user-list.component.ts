import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../User/user.service';
import{User} from '../../User/user'
import { v4 as uuid } from 'uuid';
import { Guid } from 'guid-typescript';
import { Project } from 'src/app/Project/project';
import { ProjectService } from 'src/app/Project/project.service';
import { Role } from 'src/app/Roles/role';
import { RoleDialogComponent } from '../role-dialog/role-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { RemoveRoleDialogComponent } from '../remove-role-dialog/remove-role-dialog.component';
import { LoginService } from 'src/app/LoginFiles/login.service';
import { AddSkillDialogComponent } from '../add-skill-dialog/add-skill-dialog.component';
import { RemoveSkillDialogComponent } from '../remove-skill-dialog/remove-skill-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  openRoleDialog(userId: Guid) {
    ;
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
  openSkillDialog(userId: Guid) {
    const dialogRef = this.dialog.open(AddSkillDialogComponent, {data: {
      userId,
    }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getUsers();
    });
  }
  openRemoveSkillDialog(userId: Guid) {
    console.log(userId);
    const dialogRef = this.dialog.open(RemoveSkillDialogComponent, {data: {
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
  role: Role= new Role();
  roles: Role[];
  constructor(private userService: UserService, private router: Router, private projectService: ProjectService, private dialog: MatDialog, public loginService: LoginService) { }

  ngOnInit(): void {
    this.getUsers();
// this.userService.getUsersList().subscribe(data=>{
//   this.users=data;})
  
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
  deleteUser(userId: Guid){
    this.userService.deleteUser(userId).subscribe(data=>{
      console.log(data);
      this.getUsers();
    })
  }
  navigateToProfile(userId:Guid){
    this.router.navigate(['profile', userId]);
  }
  navToPro(userId:Guid){
    this.router.navigate(['update-certifications', userId]);
  }
  addUser(){
    this.router.navigate(["/add-user"]);
  }
  addNewProjectToUser(user:User){
    console.log(this.user);
    this.userService.assignProjectToUser(user.userId, this.project.projectId).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/user-list']);
    }, error=>console.log(error));
  }
  reloadCurrentPage(){
    window.location.reload();
  }
}
