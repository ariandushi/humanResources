import { EducationService } from './../education.service';
import { Education } from './../education';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/User/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.scss']
})
export class AddEducationComponent implements OnInit {

  userId:Guid;
  user: User=new User();
  educationId:Guid;
  education: Education = new Education();
  constructor(private educationService: EducationService, private router: Router,
    private userService:UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.education.userId=this.userId;
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    }, error =>console.log(error));
  }
  saveEducation(){
    this.educationService.addEducation(this.education).subscribe(data=>{
      console.log(data);
      this.goToUserEducation(this.userId);
    }, error=>console.log(error));
  }
  goToUserEducation(userId:Guid){
    this.router.navigate(['profile', userId]);
  }
  onSubmit(){    
    console.log(this.education);
    this.saveEducation();
  }
}