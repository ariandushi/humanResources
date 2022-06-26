import { ProjectService } from './../../Project/project.service';
import { Project } from './../../Project/project';
import { Task } from './../task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.scss']
})
export class ProjectTaskComponent implements OnInit {

  projectId:Guid;
  project: Project = new Project();
  tasks: Task[];
  constructor(private taskService: TaskService, private router: Router, private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['projectId'];
    this.projectService.getProjectByProjectId(this.projectId).subscribe(data => {
      this.project = data;
    }, error=>console.log(error));

  this.taskService.getTaskByProjectId(this.projectId).subscribe(data => {
    this.tasks = data;
  }, error=>console.log(error));
}
}
