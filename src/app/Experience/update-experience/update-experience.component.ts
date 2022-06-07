import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { Experience } from '../experience';
import { ExperienceService } from '../experience.service';
import { Guid } from 'guid-typescript';



@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrls: ['./update-experience.component.scss']
})
export class UpdateExperienceComponent implements OnInit {

  expId: Guid;
  experience: Experience= new Experience();
  constructor(private experienceService:ExperienceService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.expId = this.route.snapshot.params['userId'];

    // this.experienceService.getExperienceByUserId(this.userId).subscribe(data => {
    //   this.experience = data;
    // }, error=>console.log(error));

    this.expId = this.route.snapshot.params['expId'];

    this.experienceService.getExperienceByExpId(this.expId).subscribe(data => {
      this.experience = data;
    }, error=>console.log(error));
  }
  onSubmit(){
    this.experienceService.updateExperienceByExpId(this.expId, this.experience).subscribe( data =>{
      
      this.router.navigate(['profile', this.experience.userId]);
    }
    , error => console.log(error));
  }

  
}
