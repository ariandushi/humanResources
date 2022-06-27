import { EducationService } from './../education.service';
import { Education } from './../education';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.scss']
})
export class UpdateEducationComponent implements OnInit {

  educationId: Guid;
  education: Education= new Education();
  constructor(private educationService:EducationService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.educationId = this.route.snapshot.params['educationId'];

    this.educationService.getEducationById(this.educationId).subscribe(data => {
      this.education = data;
    }, error=>console.log(error));
  }
  onSubmit(){
    this.educationService.updateEducation(this.educationId, this.education).subscribe( data =>{
      
      this.router.navigate(['profile', this.education.userId]);
    }
    , error => console.log(error));
  }  
}