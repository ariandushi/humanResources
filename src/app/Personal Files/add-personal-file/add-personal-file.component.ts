
import { PersonalFile } from 'src/app/Personal Files/personalFile';
import { PersonalFilesService } from 'src/app/Personal Files/personal-files.service';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/User/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-add-personal-file',
  templateUrl: './add-personal-file.component.html',
  styleUrls: ['./add-personal-file.component.scss']
})
export class AddPersonalFileComponent implements OnInit {

  userId:Guid;
  user: User=new User();
  personalFileId:Guid;
  personalFile: PersonalFile = new PersonalFile();
  constructor(private personalFileService: PersonalFilesService, private router: Router,
    private userService:UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.personalFile.userId=this.userId;
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    }, error =>console.log(error));
  }
  savePersonalFile(){
    this.personalFileService.addPersonalFile(this.personalFile).subscribe(data=>{
      console.log(data);
      this.goToUserPersonalFile(this.userId);
    }, error=>console.log(error));
  }
  goToUserPersonalFile(userId:Guid){
    this.router.navigate(['profile', userId]);
  }
  onSubmit(){    
    console.log(this.personalFile);
    this.savePersonalFile();
  }
}