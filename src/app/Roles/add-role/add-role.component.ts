import { UserService } from 'src/app/User/user.service';
import { RoleService } from './../role.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from './../role';
import { Guid } from 'guid-typescript';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  
  role: Role = new Role();

  constructor(private router: Router,
    private roleService: RoleService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveRole(){
    this.roleService.addRole(this.role).subscribe(data=>{
      console.log(data);
      this.goToRoleList();
    })
  }
  goToRoleList(){
    this.router.navigate(['/role-list']);
  }
  onSubmit(){
    console.log(this.role);
    this.saveRole();
  }

}