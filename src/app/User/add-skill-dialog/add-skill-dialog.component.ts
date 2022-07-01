import { SkillService } from './../../Skills/skill.service';
import { Skill } from './../../Skills/skill';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { UserService } from '../user.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-skill-dialog',
  templateUrl: './add-skill-dialog.component.html',
  styleUrls: ['./add-skill-dialog.component.scss']
})
export class AddSkillDialogComponent implements OnInit {

  skills: Skill[];
  skillId: Guid;
  constructor(private skillService: SkillService, private userService: UserService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.skillService.getSkillList().subscribe(data=>{
        this.skills=data;
    })
  }
  saveSkill() {
    console.log("Skill: ", this.skillId, this.data.userId);
    this.userService.assignSkillToUser(this.data.userId, this.skillId).subscribe(res => console.log(res));
  }
}