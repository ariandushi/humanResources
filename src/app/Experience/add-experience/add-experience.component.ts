import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from '../experience';
import { ExperienceService } from '../experience.service';
import {v4 as uuid} from 'uuid';
import { UserService } from 'src/app/User/user.service';
import { User } from 'src/app/User/user';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss']
})
export class AddExperienceComponent implements OnInit {

  userId:Guid;
  expId:Guid;
  experience: Experience = new Experience();
  user: User=new User();
  constructor(private experienceService: ExperienceService, private router: Router,
    private userService:UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.experience.userId=this.userId;
    //;
    this.userService.getUserById(this.userId).subscribe(data => {
      
      this.user = data;
    }, error =>console.log(error));
  }
  
  saveExperience(){
    this.experienceService.addExperience(this.experience, this.userId).subscribe(data=>{
      console.log(data);
      this.goToUserExperience(this.userId);
    }, error=>console.log(error));
  }

  goToUserExperience(userId:Guid){
    this.router.navigate(['profile', userId]);
  }
  onSubmit(){
    
    console.log(this.experience);
    this.saveExperience();
    
  }

}
