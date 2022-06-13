import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Project } from 'src/app/Project/project';
import { ProjectService } from 'src/app/Project/project.service';

@Component({
  selector: 'app-user-projects-list',
  templateUrl: './user-projects-list.component.html',
  styleUrls: ['./user-projects-list.component.scss']
})
export class UserProjectsListComponent implements OnInit {

  userId:Guid;
  projectId:Guid;
  project:Project=new Project();
  projects:Project[];
  constructor(private projectService: ProjectService, private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params[`userId`];
    this.projectService.getProjectsByUserId(this.userId).subscribe(data=>{
     // this.projects=data;
    }, error=>console.log(error));
  }

  addProject(projectId:Guid ){
    this.router.navigate(['/project-list']);
  }
}
