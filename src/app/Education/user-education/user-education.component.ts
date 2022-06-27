import { Education } from './../education';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { EducationService } from '../education.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-education',
  templateUrl: './user-education.component.html',
  styleUrls: ['./user-education.component.scss']
})
export class UserEducationComponent implements OnInit {
  userId:Guid;
  educationId: Guid;
  education: Education= new Education();
  educations: Education[];
  constructor(private educationService: EducationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.educationService.getEducationByUserId(this.userId).subscribe(data => {
      this.educations = data;
    }, error=>console.log(error));
  }
  updateEducation(educationId: Guid){
    this.router.navigate(['update-education', educationId]);
  }
}