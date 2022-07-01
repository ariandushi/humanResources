import { SkillService } from './../skill.service';
import { Skill } from './../skill';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {

  skill: Skill = new Skill();

  constructor(private router: Router,
    private skillService: SkillService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveSkill(){
    this.skillService.addSkill(this.skill).subscribe(data=>{
      console.log(data);
      this.goToSkillList();
    })
  }
  goToSkillList(){
    this.router.navigate(['/skill-list']);
  }
  onSubmit(){
    console.log(this.skill);
    this.saveSkill();
  }
}