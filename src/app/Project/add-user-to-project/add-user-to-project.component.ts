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
  username: string;
  users: User[];

  constructor(private projectService: ProjectService, private userService: UserService, private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.userService.getUsersList().subscribe(data=>{
      this.users=data;
    })
    }

  saveUser(){
    console.log("Project: ", this.username, this.data.projecId)
    this.projectService.assignUserToProject(this.data.projectId, this.username).subscribe(data=>{
      console.log(data);
    });
  }
}