import { SkillService } from './../skill.service';
import { Skill } from './../skill';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/User/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-skill-user-list',
  templateUrl: './skill-user-list.component.html',
  styleUrls: ['./skill-user-list.component.scss']
})
export class SkillUserListComponent implements OnInit {

  skillId: Guid;
  skill: Skill = new Skill();
  users: User[];

  constructor(private route: ActivatedRoute, private skillService: SkillService, private userService: UserService) { }

  ngOnInit(): void {
    this.skillId = this.route.snapshot.params['skillId'];
    this.skillService.getSkillById(this.skillId).subscribe(data=>{
      this.skill = data;
    }, error=> console.log(error));

    this.userService.getUsersBySkillId(this.skillId).subscribe(data=>{
      this.users = data;
    }, error=> console.log(error));
  }

}