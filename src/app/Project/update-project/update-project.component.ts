import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/User/user';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {

  userId:Guid;
  projectId:Guid;
  project: Project= new Project();

  constructor(private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId=this.route.snapshot.params['projectId'];
    this.projectService.getProjectByProjectId(this.projectId).subscribe(data=>{
      this.project=data;
    }, error => console.log(error));
  }


  onSubmit(){
    this.projectService.updateProject(this.projectId, this.project).subscribe(data=>{
      this.goToProjectList();
    })
  }

  goToProjectList(){
    this.router.navigate(['/project-list']);
  }

}
