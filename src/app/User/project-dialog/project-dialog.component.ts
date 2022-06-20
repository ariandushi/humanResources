import { ProjectService } from 'src/app/Project/project.service';
import { Project } from 'src/app/Project/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent implements OnInit {

  projects: Project[];
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjectList().subscribe(data=>{
      this.projects=data;
    })
  }

}
