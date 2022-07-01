import { SkillService } from './../../Skills/skill.service';
import { Skill } from './../../Skills/skill';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-remove-skill-dialog',
  templateUrl: './remove-skill-dialog.component.html',
  styleUrls: ['./remove-skill-dialog.component.scss']
})
export class RemoveSkillDialogComponent implements OnInit {

  userId: Guid;
  skills: Skill[];
  skillId: Guid;
  user: User = new User();
  constructor(private skillService: SkillService, private userService: UserService, private route: ActivatedRoute , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.userId = this.data.userId;
      this.skillService.getSkillByUserId(this.userId).subscribe(data=>{
        this.skills=data;
      })
  }
  saveSkill() {
    console.log("Skill: ", this.skillId, this.data.userId);
    debugger;
    this.userService.removeSkillFromUser(this.data.userId, this.skillId).subscribe(res =>
       console.log(res));
  }

}