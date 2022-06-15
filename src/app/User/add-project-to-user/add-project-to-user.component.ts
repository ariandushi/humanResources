import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Project } from 'src/app/Project/project';
import { ProjectService } from 'src/app/Project/project.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-project-to-user',
  templateUrl: './add-project-to-user.component.html',
  styleUrls: ['./add-project-to-user.component.scss']
})
export class AddProjectToUserComponent implements OnInit {

  projectId:Guid;
  userId:Guid;
  user:User= new User();
  project: Project=new Project();
  projects:Project[];
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private projectService: ProjectService ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];

    this.userService.getUserById(this.userId).subscribe(data=>{
      this.user= data;
    }, error =>console.log(error));

    this.projectService.getProjectList().subscribe(data=>{
      this.projects=data;
    }, error =>console.log(error));
  }

  chosenProject(e:any){
    this.project=e;
  }
  addNewProjectToUser(user:User){
    this.userService.assignProjectToUser(user.userId,this.project.projectId).subscribe(data=>{
      console.log(data);
    },error=>console.log(error));
    this.navigateToProfile(this.userId);
  }

  navigateToProfile(userId:Guid){
    this.router.navigate(['profile', userId]);
  }
}
