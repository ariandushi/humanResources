import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  userId: Guid;
  //user: User = new User();
  project: Project= new Project();
  projects: Project[];
  users: User[];
  user:User= new User();
  currentUser : User;
  projectId:Guid;
  currentProject: Project;
  constructor(private projectService: ProjectService,
    private router: Router, private userService:UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectService.getProjectList().subscribe(data=>{
      this.projects=data;

    })
    this.userService.getUsersList().subscribe(data=>{

      this.users=data;
    })
  }

  SelectedValue: Guid;
  chosenUser(e:any){
    this.user=e;
  }
  updateProject(projectId:Guid){
    this.router.navigate([`update-project`, projectId])
  }
  addUserToProject(projectId:Guid){
    this.router.navigate([`add-user-to-project`, projectId])
  }
  navigateToProjectList(){
    this.router.navigate(['/projects']);
  }

  getUserUserId(userId:Guid){
    this.userService.getUserById(userId).subscribe(data=>{
      console.log(data);
      // this.projects.push(this.user)
    },error=>console.log(error));
  }
  // setNewUser(user: User): void{
  //   console.log(user);
  //   this.currentUser=user;
  // }
  addNewUserToProject(project: Project){
    console.log(this.project);
    this.projectService.assignUserToProject(project.projectId, this.user.username).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/project-list']);
    }, error=>console.log(error));
  }
  showUsers(projectId:Guid){
    this.router.navigate([`project-user-list`, projectId]);
  }
  deleteProject(projectId:Guid){
    this.projectService.deleteProject(projectId).subscribe(data=>{
      console.log(data);
      this.projectService.getProjectList();
    },error=>console.log(error));
  }

  reloadCurrentPage(){
    window.location.reload();
  }

  addProject(){
    this.router.navigate(["/add-project"]);
  }
 
}
