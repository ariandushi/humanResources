import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';
import { Certification } from '../certification';
import { CertificationsService } from '../certifications.service';

@Component({
  selector: 'app-add-certifications',
  templateUrl: './add-certifications.component.html',
  styleUrls: ['./add-certifications.component.scss']
})
export class AddCertificationsComponent implements OnInit {

  userId:Guid;
  certification: Certification=new Certification;
  user:User = new User();

  constructor(private route: ActivatedRoute, private userService: UserService,
    private certificationsService: CertificationsService,
    private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.certification.userId=this.userId;
    //;
    this.userService.getUserById(this.userId).subscribe(data => {
      
      this.user = data;
    }, error =>console.log(error));
  }

  onSubmit(){
    console.log(this.certification);
    this.certificationsService.addCertification(this.certification, this.userId).subscribe(data=>{
      console.log(data);
      this.saveCertification(this.userId);
    })
  }
  saveCertification(userId:Guid){
    this.router.navigate(['profile', userId]);
  }

}
