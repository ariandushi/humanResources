import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from './../../Roles/role.service';
import { UserService } from 'src/app/User/user.service';
import { Role } from './../../Roles/role';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { User } from '../user';

@Component({
  selector: 'app-add-role-to-user',
  templateUrl: './add-role-to-user.component.html',
  styleUrls: ['./add-role-to-user.component.scss']
})
export class AddRoleToUserComponent implements OnInit {

  userId: Guid;
  roleId: Guid;
  roleName: String;
  user: User = new User();
  role: Role = new Role();
  roleList: Role[];

  constructor(private userService: UserService, private roleService: RoleService,
  private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.userService.getUserById(this.userId).subscribe(data=>{
      this.user = data;
    }, error=>console.log(error));
    this.roleService.getRoleList().subscribe(data=>{
      this.roleList=data;
    }, error=>console.log(error));
  }
  getRoleByName(roleName: String){
    this.roleService.getRoleByName(roleName).subscribe(data=>{
      console.log(data);
    }, error=>console.log(error));
  }
  addRoleToUser(user:User){
    this.userService.assignRoleToUser(user.userId, this.role.roleName).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/user-list']);
    }, error=>console.log(error));
  }
  chosenRole(e:any){
    this.role=e;
  }

}
