import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { PersonalFilesService } from '../personal-files.service';
import { PersonalFile } from '../personalFile';

@Component({
  selector: 'app-user-personal-file',
  templateUrl: './user-personal-file.component.html',
  styleUrls: ['./user-personal-file.component.scss']
})
export class UserPersonalFileComponent implements OnInit {


  userId:Guid;
  personalFileId: Guid;
  personalFile: PersonalFile = new PersonalFile();
  personalFiles: PersonalFile[];
  constructor(private personalFileService: PersonalFilesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.personalFileService.getPersonalFileByUserId(this.userId).subscribe(data => {
      this.personalFiles = data;
    }, error=>console.log(error));
  }
  updatePersonalFile(personalFileId: Guid){
    this.router.navigate(['update-personal-file', personalFileId]);
  }
}