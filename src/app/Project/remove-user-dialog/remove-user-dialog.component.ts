import { ProjectService } from 'src/app/Project/project.service';
import { UserService } from 'src/app/User/user.service';
import { Project } from './../project';
import { User } from 'src/app/User/user';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ActivatedRoute } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-remove-user-dialog',
  templateUrl: './remove-user-dialog.component.html',
  styleUrls: ['./remove-user-dialog.component.scss']
})
export class RemoveUserDialogComponent implements OnInit {

  userId: Guid;
  projectId: Guid;
  users: User[];
  project: Project = new Project();
  constructor(private projectService: ProjectService, private userService: UserService, private route: ActivatedRoute , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.projectId = this.data.projectId;
      this.userService.getUsersByProjectId(this.projectId).subscribe(data=>{
        this.users=data;
      })
  }
  saveUser() {
    console.log("User: ", this.userId, this.data.projectId);
    this.projectService.removeUserFromProject(this.data.projectId, this.userId).subscribe(res => console.log(res));
  }
}