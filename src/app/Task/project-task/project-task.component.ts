import { ProjectService } from './../../Project/project.service';
import { Project } from './../../Project/project';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { TaskService } from 'src/app/Task/task.service';
import { Task } from '../task';
import { AddUserToTaskComponent } from '../add-user-to-task/add-user-to-task.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.scss']
})
export class ProjectTaskComponent implements OnInit {

  openAddUserDialog(projectId: Guid, taskId:Guid) {
    const dialogRef = this.dialog.open(AddUserToTaskComponent, {data: {
      projectId, taskId,
    }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getTasks();
    });
  }

  projectId:Guid;
  project: Project = new Project();
  tasks: Task[];
  taskId: Guid;
  constructor(private taskService: TaskService, private router: Router, private projectService: ProjectService, private route: ActivatedRoute, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['projectId'];
    this.projectService.getProjectByProjectId(this.projectId).subscribe(data => {
      this.project = data;
    }, error=>console.log(error));

  this.taskService.getTaskByProjectId(this.projectId).subscribe(data => {
    this.tasks = data;
  }, error=>console.log(error));
}
 getTasks(){
  this.taskService.getTaskByProjectId(this.projectId).subscribe(data=>{
    this.tasks = data;
  })
}
}