import { ProjectService } from './../../Project/project.service';
import { TaskService } from './../task.service';
import { Task } from './../task';
import { Project } from './../../Project/project';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  projectId:Guid;
  project: Project = new Project();
  taskId:Guid;
  task: Task = new Task();
  constructor(private taskService: TaskService, private router: Router,
    private projectService: ProjectService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['projectId'];
    this.task.projectId=this.projectId;
    this.projectService.getProjectByProjectId(this.projectId).subscribe(data => {
      this.project = data;
    }, error =>console.log(error));
  }
  saveTask(){
    this.taskService.addTask(this.task).subscribe(data=>{
      console.log(data);
      this.goToProjectList(this.projectId);
    }, error=>console.log(error));
  }
  goToProjectList(projectId:Guid){
    this.router.navigate(['project-list', projectId]);
  }
  onSubmit(){    
    console.log(this.task);
    this.saveTask();
  }
}
