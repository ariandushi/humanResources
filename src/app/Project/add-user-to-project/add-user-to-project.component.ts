import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-user-to-project',
  templateUrl: './add-user-to-project.component.html',
  styleUrls: ['./add-user-to-project.component.scss']
})
export class AddUserToProjectComponent implements OnInit {
  userId:Guid;
  projectId:Guid;
  user: User = new User();
  userList: User[];
  project: Project= new Project();

  //project: Project= new Project();
  constructor(private projectService: ProjectService, private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }



  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['projectId'];
    //this.user.projectId=this.projectId;
    //debugger;
    this.projectService.getProjectByProjectId(this.projectId).subscribe(data => {
      
      this.project = data;
    }, error =>console.log(error));

    this.userService.getUsersList().subscribe(data=>{
      this.userList=data;
    }, error=>console.log(error));
  }

  getUserUserId(userId:Guid){
    this.userService.getUserById(userId).subscribe(data=>{
      console.log(data);
      // this.projects.push(this.user)
    },error=>console.log(error));
  }

  addNewUserToProject(project: Project){
    this.projectService.assignUserToProject(project.projectId, this.user.userId).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/project-list']);
    }, error=>console.log(error));
  }

  chosenUser(e:any){
    this.user=e;
  }
}
