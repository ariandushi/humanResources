import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Certification } from 'src/app/Certifications/certification';
import { CertificationsService } from 'src/app/Certifications/certifications.service';
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-user-list',
  templateUrl: './project-user-list.component.html',
  styleUrls: ['./project-user-list.component.scss']
})
export class ProjectUserListComponent implements OnInit {

  projectId:Guid;
  project: Project= new Project();
  users: User[];
  constructor(private route: ActivatedRoute, private projectService: ProjectService, private userService: UserService) { }

  ngOnInit(): void {
   this.projectId = this.route.snapshot.params['projectId'];

   this.projectService.getProjectByProjectId(this.projectId).subscribe(data=>{
    
    this.project=data;
   }, error =>console.log(error));

   this.userService.getUsersByProjectId(this.projectId).subscribe(data=>{
  this.users=data;
   },error=>console.log(error));
  }


}
