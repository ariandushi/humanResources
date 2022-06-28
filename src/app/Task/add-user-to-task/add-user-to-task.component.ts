import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';
import { ActivatedRoute } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-add-user-to-task',
  templateUrl: './add-user-to-task.component.html',
  styleUrls: ['./add-user-to-task.component.scss']
})
export class AddUserToTaskComponent implements OnInit {

  userId:Guid;
  users: User[];
  projectId: Guid;
  task:Task= new Task();
  taskId:Guid;
  constructor(private taskService: TaskService, private userService: UserService, private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    debugger;
    this.projectId= this.data.projectId;
    this.userService.getUsersByProjectId(this.projectId).subscribe(data=>{
      this.users=data;
    });
    }

  saveUser(){
    this.taskService.assignUserToTask(this.data.taskId, this.userId).subscribe(data=>{
      console.log(data);
    });
  }

}