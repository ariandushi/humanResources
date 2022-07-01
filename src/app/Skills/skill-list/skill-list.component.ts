import { SkillService } from './../skill.service';
import { Skill } from './../skill';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/User/user';
import { UserService } from 'src/app/User/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  userId: Guid;
  user: User = new User();
  users: User[];
  skillId: Guid;
  skill: Skill = new Skill();
  skills: Skill[];
  constructor(private skillService: SkillService,
    private router: Router, private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.skillService.getSkillList().subscribe(data=>{
      this.skills = data;
    })
    this.userService.getUsersList().subscribe(data=>{
      this.users = data;
    })
  }
  SelectedValue: Guid;
  chosenUser(e:any){
    this.user = e;
  }
  addSkill(){
    this.router.navigate(["/add-skill"]);
  }
  showUsers(skillId:Guid){
    this.router.navigate([`/skill-user-list`, skillId]);
  }
  deleteSkill(skillId:Guid){
    this.skillService.deleteSkill(skillId).subscribe(data=>{
      console.log(data);
      this.skillService.getSkillList().subscribe(data=>{
        this.skills=data;
      });
    },error=>console.log(error));
  }

  reloadCurrentPage(){
    window.location.reload();
  }
}