import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { LoginService } from 'src/app/LoginFiles/login.service';
import { Task } from 'src/app/Task/task';
import{TaskService} from 'src/app/Task/task.service'
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';
import { AddUserToProjectComponent } from '../add-user-to-project/add-user-to-project.component';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { RemoveUserDialogComponent } from '../remove-user-dialog/remove-user-dialog.component';

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
  taskId:Guid;
  task:Task=new Task();
  constructor(private projectService: ProjectService,
    private router: Router, private userService:UserService,
    private route: ActivatedRoute, private taskService: TaskService, private dialog: MatDialog , public loginService: LoginService) { }

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
 
  navigateToProjectList(){
    this.router.navigate(['/projects']);
  }

  getUserUserId(userId:Guid){
    this.userService.getUserById(userId).subscribe(data=>{
      console.log(data);
      // this.projects.push(this.user)
    },error=>console.log(error));
  }

  addUserToProject(projectId:Guid){
    const dialogRef = this.dialog.open(AddUserToProjectComponent, {data: {
      projectId
    }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.projectService.getProjectList().subscribe(data=>{
        this.projects=data;})
    });
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
  showTasks(projectId:Guid){
    this.router.navigate([`/project-task`, projectId]);
  }

  addTaskToProject(projectId:Guid){
    this.router.navigate([`/add-task`, projectId]);
  }
  // addTaskToProject(project: Project){
  //   this.taskService.assignTaskToProject(project.projectId, this.task.taskId).subscribe(data=>{
  //     this.router.navigate(["/add-task"]);
  //   },error=>console.log(error));
  // }
  removeUserFromProject(projectId:Guid){
    const dialogRef = this.dialog.open(RemoveUserDialogComponent, {data: {
      projectId
    }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.projectService.getProjectList().subscribe(data=>{
        this.projects=data;})
    });
  }
}
