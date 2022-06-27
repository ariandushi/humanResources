import { TaskService } from 'src/app/Task/task.service';
import { Task } from 'src/app/Task/task';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.scss']
})
export class UserTaskComponent implements OnInit {

  userId:Guid;
  taskId: Guid;
  task: Task = new Task();
  tasks: Task[];
  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.taskService.getTaskByUserId(this.userId).subscribe(data => {
      this.tasks = data;
    }, error=>console.log(error));
  }
}