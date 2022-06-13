import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Project } from 'src/app/Project/project';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-project-to-user',
  templateUrl: './add-project-to-user.component.html',
  styleUrls: ['./add-project-to-user.component.scss']
})
export class AddProjectToUserComponent implements OnInit {

  userId:Guid;
  user:User= new User();
  project: Project=new Project();
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];

    this.userService.getUserById(this.userId).subscribe(data=>{
      this.user= data;
    }, error =>console.log(error));
  }

  onSubmit(){
    console.log(this.user);
    this.userService.assignProjectToUser(this.userId,this.project.projectId).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/user-list']);
    },error=>console.log(error));
  }

}
