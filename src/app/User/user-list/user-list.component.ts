import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../User/user.service';
import{User} from '../../User/user'
import { v4 as uuid } from 'uuid';
import { Guid } from 'guid-typescript';
import { Project } from 'src/app/Project/project';
import { ProjectService } from 'src/app/Project/project.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userId:Guid;
  projectId:Guid;
  users : User[];
  user:User;
  project: Project=new Project();
  projects: Project[];
  constructor(private userService: UserService, private router: Router, private projectService: ProjectService) { }

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
  /*updateUserUsername(username){
    this.router.navigate(['update-user', username]);
  }*/
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
    // this.userService.addUser(this.user).subscribe(data=>{
    //   console.log(data);
    // }, error=> console.log(error));
    this.router.navigate(["/add-user"]);
  }

  addProjectToUser(user:User){
    console.log(this.user);
    this.userService.assignProjectToUser(user.userId, this.project.projectId ).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/user-list']);
    }, error=>console.log(error));
  }
  chosenProject(e:any){
    this.project=e;
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
