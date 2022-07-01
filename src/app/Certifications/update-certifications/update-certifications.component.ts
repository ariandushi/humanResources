import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';
import { Certification } from '../certification';
import { CertificationsService } from '../certifications.service';

@Component({
  selector: 'app-update-certifications',
  templateUrl: './update-certifications.component.html',
  styleUrls: ['./update-certifications.component.scss']
})
export class UpdateCertificationsComponent implements OnInit {

  userId:Guid;
  certificationID:Guid;
  certifications: Certification[];
  user: User=new User();
  certification: Certification = new Certification();

  constructor(private userService:UserService,private route: ActivatedRoute,
    private certificationsService: CertificationsService, private router: Router) { }

  ngOnInit(): void {
    // this.userId = this.route.snapshot.params['userId'];
    // this.userService.getUserById(this.userId).subscribe(data => {
    //   this.user = data;
    // }, error =>console.log(error));

    this.certificationID = this.route.snapshot.params['certificationID'];
    this.certificationsService.getCertificationByCertificationId(this.certificationID).subscribe(data => {
      this.certification = data;
    }, error=>console.log(error));
  }

  addCertification(userId:Guid){
    this.router.navigate(['add-certifications', userId]);
  }

  onSubmit(){
    this.certificationsService.editCertification(this.certificationID, this.certification).subscribe(data=>{
      this.router.navigate(['profile', this.certification.userId]);

    })
  }

}
