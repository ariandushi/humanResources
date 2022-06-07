import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from '../experience';
import { ExperienceService } from '../experience.service';
import{User} from '../../User/user'
import {v4 as uuid} from 'uuid';
import { Guid } from 'guid-typescript';



@Component({
  selector: 'app-user-experience',
  templateUrl: './user-experience.component.html',
  styleUrls: ['./user-experience.component.scss']
})
export class UserExperienceComponent implements OnInit {

  userId:Guid;
  expId: Guid;
  experience: Experience= new Experience();
  experiences: Experience[];
  constructor(private experienceService: ExperienceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];

    this.experienceService.getExperienceByUserId(this.userId).subscribe(data => {
      this.experiences = data;
    }, error=>console.log(error));
  }

  /*private getExperienceByUserId(userId: string = uuid()){
    this.experienceService.getExperienceByUserId(userId).subscribe(data=>{
      console.log(data);
      this.experiences=data;
    });
  }*/
  updateExperience(expId: Guid){
    this.router.navigate(['update-experience', expId]);
  }
}
