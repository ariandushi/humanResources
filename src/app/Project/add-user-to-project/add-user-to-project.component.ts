import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-user-to-project',
  templateUrl: './add-user-to-project.component.html',
  styleUrls: ['./add-user-to-project.component.scss']
})
export class AddUserToProjectComponent implements OnInit {
  userId:Guid;
  projectId:Guid;
  user: User = new User();
  userList: User[];
  currentProject: Project;
  project: Project= new Project();
  errorMessage: string;
  //project: Project= new Project();
  constructor(private projectService: ProjectService, private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  // ngOnInit(): void {
  //   this.userService.getUsersList().subscribe(
  //     userlist=> this.userList= userlist,
  //     error=> this.errorMessage= error as any);

  //     const projectId = this.route.snapshot.params['projectId'];
  //     this.projectService.getProjectByProjectId(projectId).subscribe(res=>{
  //       this.currentProject=res;
  //     },
  //     error=>this.errorMessage=error as any);

  //     // this.projectId = this.route.snapshot.params['projectId'];
  //   this.user.projectId=this.projectId;
  //   this.projectService.getProjectByProjectId(this.projectId).subscribe(data => {
      
  //     this.project = data;
  //    } , error =>console.log(error));

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['projectId'];
    //this.user.projectId=this.projectId;
    //debugger;
    this.projectService.getProjectByProjectId(this.projectId).subscribe(data => {
      
      this.project = data;
    }, error =>console.log(error));
  }

  onSubmit(){
    console.log(this.project);
    this.projectService.addUserToProject(this.projectId,this.project,this.userId,this.user).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/project-list']);
    }, error=>console.log(error));
    
    
  }
  // // this.userId = this.route.snapshot.params['userId'];

  //   // this.projectService.getProjectByUserId(this.userId).subscribe(data => {
  //   //   this.project = data;
  //   // }, error=>console.log(error));
  // }


  // addUserToProject(project: Project) {
  //   this.router.navigate(['/project-list', this.projectId, 'pets', 'add']);
  // }
  // onSubmit(user: User){
  //   user.project=this.currentProject;
  //   this.projectService.updateProject(this.projectId, this.project).subscribe(data=>{
      
  //   })



  // onSubmit(user: User){
  //   user.project=this.currentProject;
  //   this.userService.addUser(user).subscribe(data=>{
  //     //this.user=data;
  //   })
  // }

  // onClick(){
  //   this.projectId = this.route.snapshot.params['projectId'];
  //   this.user.projectId=this.projectId;
  //   this.projectService.getProjectByProjectId(this.projectId).subscribe(data => {
      
  //     this.project = data;
  //    } , error =>console.log(error));

  //   this.projectService.updateProject(this.projectId, this.project).subscribe(data=>{
  //     this.router.navigate(['/project-list']);
  //   })
  // }

  // onSubmit(){
  //   this.projectService.updateProject(this.projectId, this.project).subscribe(data=>{
  //     this.goToProjectList();
  //   })
  // }

  // goToProjectList(){
  //   this.router.navigate(['/project-list']);
  // }



  //   // user.userId=null;
  //   // this.userService.addUser(user).subscribe(newUser=>{
  //   //   this.user=newUser;
  //   //   this.router.navigate(['/project-list', this.projectId]);
  //   // })
  // }


  // goToProjectList(){
  //   this.router.navigate(['/project-list']);
  // }

}
