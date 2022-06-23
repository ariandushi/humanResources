import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Project } from 'src/app/Project/project';
import { ProjectService } from 'src/app/Project/project.service';
import { Task } from 'src/app/Tasks/task';
import { TaskService } from 'src/app/Tasks/task.service';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  projectId:Guid;
  project: Project=new Project();
  tasks:Task[];
  constructor(private route: ActivatedRoute, private projectService:ProjectService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['projectId'];
    this.projectService.getProjectByProjectId(this.projectId).subscribe(data=>{
    
      this.project=data;
     }, error =>console.log(error));
     this.taskService.getTasksByProjectId(this.projectId).subscribe(data=>{
      this.tasks=data;
     }, error =>console.log(error));
  }

}
