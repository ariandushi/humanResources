import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  projectId:Guid;
  project: Project= new Project();
  constructor(private router: Router,
    private projectService:ProjectService,
    private userService: UserService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {

  }
  saveProject(){
    this.projectService.addNewProject(this.project).subscribe(data=>{
      console.log(data);
      this.goToProjectList();
    })
  }
  goToProjectList(){
    this.router.navigate(['/project-list']);
  }
  onSubmit(){
    console.log(this.project);
    this.saveProject();
  }

}
