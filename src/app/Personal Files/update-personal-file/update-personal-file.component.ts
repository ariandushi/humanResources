
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalFile } from 'src/app/Personal Files/personalFile';
import { PersonalFilesService } from 'src/app/Personal Files/personal-files.service';

@Component({
  selector: 'app-update-personal-file',
  templateUrl: './update-personal-file.component.html',
  styleUrls: ['./update-personal-file.component.scss']
})
export class UpdatePersonalFileComponent implements OnInit {


  personalFileId: Guid;
  personalFile: PersonalFile = new PersonalFile();
  constructor(private personalFileService: PersonalFilesService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personalFileId = this.route.snapshot.params['personalFileId'];

    this.personalFileService.getPersonalFileById(this.personalFileId).subscribe(data => {
      this.personalFile = data;
    }, error=>console.log(error));
  }
  onSubmit(){
    this.personalFileService.updatePersonalFile(this.personalFileId, this.personalFile).subscribe( data =>{
      
      this.router.navigate(['profile', this.personalFile.userId]);
    }
    , error => console.log(error));
  }  
}