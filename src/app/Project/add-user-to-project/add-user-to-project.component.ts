import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-user-to-project',
  templateUrl: './add-user-to-project.component.html',
  styleUrls: ['./add-user-to-project.component.scss']

})
export class AddUserToProjectComponent implements OnInit {
  userId:Guid;
  username: String;
  projectId:Guid;
  user: User = new User();
  users: User[];
  project: Project= new Project();

  constructor(private projectService: ProjectService, private userService: UserService, private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this. projectId = this.route.snapshot.params['projectId'];
    this.projectService.getProjectByProjectId(this.projectId).subscribe(data=>{
      this.project=data;
    });
    this.userService.getUsersList().subscribe(data=>{
      this.users=data;
    });
  }

  saveUser(project: Project){
    // console.log("Project: ", this.data, this.userId)
    this.projectService.assignUserToProject(project.projectId, this.user.userId).subscribe(data=>{
      console.log(data);
    });
  }
}
