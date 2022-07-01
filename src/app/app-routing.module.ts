import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './Address/add-address/add-address.component';
import { UserAddressComponent } from './Address/user-address/user-address.component';
import { AdminComponent } from './admin/admin.component';
import { AddCertificationsComponent } from './Certifications/add-certifications/add-certifications.component';
import { UpdateCertificationsComponent } from './Certifications/update-certifications/update-certifications.component';
import { PlaceDayOffRequestComponent } from './dayOff/place-day-off-request/place-day-off-request.component';
import { AddExperienceComponent } from './Experience/add-experience/add-experience.component';
import { UpdateExperienceComponent } from './Experience/update-experience/update-experience.component';
import { UserExperienceComponent } from './Experience/user-experience/user-experience.component';
import { LoginComponent } from './LoginFiles/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProjectComponent } from './Project/add-project/add-project.component';
import { AddUserToProjectComponent } from './Project/add-user-to-project/add-user-to-project.component';
import { ProjectListComponent } from './Project/project-list/project-list.component';
import { ProjectUserListComponent } from './Project/project-user-list/project-user-list.component';
import { UpdateProjectComponent } from './Project/update-project/update-project.component';
import { AddProjectToUserComponent } from './User/add-project-to-user/add-project-to-user.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { UserProjectsListComponent } from './User/user-projects-list/user-projects-list.component';
import { AuthGuard } from './LoginFiles/_auth/auth.guard';
import { DayOffRequestsComponent } from './dayOff/day-off-requests/day-off-requests.component';
import { ChangePasswordComponent } from './User/change-password/change-password.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AddEducationComponent } from './Education/add-education/add-education.component';
import { UpdateEducationComponent } from './Education/update-education/update-education.component';
import { UserEducationComponent } from './Education/user-education/user-education.component';
import { AddPersonalFileComponent } from './Personal Files/add-personal-file/add-personal-file.component';
import { UpdatePersonalFileComponent } from './Personal Files/update-personal-file/update-personal-file.component';
import { AddTaskComponent } from './Task/add-task/add-task.component';
import { UserTaskComponent } from './Task/user-task/user-task.component';
import { ProjectTaskComponent } from './Task/project-task/project-task.component';
import { AddUserToTaskComponent } from './Task/add-user-to-task/add-user-to-task.component';
import { RoleListComponent } from './Roles/role-list/role-list.component';
import { RoleUserListComponent } from './Roles/role-user-list/role-user-list.component';
import { AddRoleComponent } from './Roles/add-role/add-role.component';
import { UpdateAddressComponent } from './Address/update-address/update-address.component';
import { HeaderComponent } from './header/header.component';
import { AddSkillComponent } from './Skills/add-skill/add-skill.component';
import { SkillListComponent } from './Skills/skill-list/skill-list.component';
import { SkillUserListComponent } from './Skills/skill-user-list/skill-user-list.component';


const routes: Routes = [
  {path: 'users', component : UserListComponent},
  {path: 'add-user', component: AddUserComponent, canActivate:[AuthGuard], data: {roles: ['Admin']}},
  {path: 'update-user/:userId', component:UpdateUserComponent, canActivate:[AuthGuard], data: {roles: ['Admin']}},
  {path: 'user-experience', component:UserExperienceComponent},
  {path: 'add-experience/:userId', component:AddExperienceComponent},
  {path: 'update-experience/:expId', component:UpdateExperienceComponent},
  {path: 'user-list', component:UserListComponent},
  {path: 'profile',
        children:[
          {path: ':userId', component:ProfileComponent},
          {path: ':expId', component:ProfileComponent},
          {path: ':certificationID', component:ProfileComponent},
          {path: ':projectId', component:ProfileComponent},
          {path: ':addressID', component:ProfileComponent},
          {path: ':dayOffId', component:ProfileComponent},

        ]},
  {path: 'project-list', component:ProjectListComponent},
  {path: 'add-project', component:AddProjectComponent, canActivate:[AuthGuard], data: {roles: ['Admin' , 'HR-Manager', 'HR-Specialist']}},
  {path: 'update-project/:projectId', component:UpdateProjectComponent, canActivate:[AuthGuard], data: {roles: ['Admin' , 'HR-Manager', 'HR-Specialist']} },
  {path: 'user-projects-list', component:UserProjectsListComponent},
  {path: 'project-user-list/:projectId', component:ProjectUserListComponent},

  {path: 'add-user-to-project/:projectId', component:AddUserToProjectComponent, canActivate:[AuthGuard], data: {roles: ['Admin' , 'HR-Manager', 'HR-Specialist']} },
  {path: 'add-project-to-user/:userId', component:AddProjectToUserComponent, canActivate:[AuthGuard], data: {roles: ['Admin' , 'HR-Manager', 'HR-Specialist']} },
  {path: 'add-address/:userId', component:AddAddressComponent},
  {path: 'user-address', component:UserAddressComponent},
  {path: 'update-address/:addressID', component:UpdateAddressComponent},

  {path: 'add-certifications/:userId', component:AddCertificationsComponent},
  {path: 'update-certifications/:certificationID', component:UpdateCertificationsComponent},
  {path: 'add-education/:userId', component:AddEducationComponent},
  {path: 'update-education/:educationId', component:UpdateEducationComponent},
  {path: 'user-education', component:UserEducationComponent},
  {path: 'add-personal-file/:userId', component:AddPersonalFileComponent},
  {path: 'update-personal-file/:personalFileId', component:UpdatePersonalFileComponent},
  {path: 'add-task/:projectId', component: AddTaskComponent, canActivate:[AuthGuard], data: {roles: ['Admin' , 'HR-Manager', 'HR-Specialist']} },
  {path: 'user-task', component: UserTaskComponent},
  {path: 'project-task/:projectId', component: ProjectTaskComponent},
  {path: 'add-user-to-task/:taskId', component: AddUserToTaskComponent, canActivate:[AuthGuard], data: {roles: ['Admin' , 'HR-Manager', 'HR-Specialist']} },
  {path: 'login', component:LoginComponent},
  {path: 'admin', component:AdminComponent, canActivate:[AuthGuard], data: {roles: ['Admin', 'HR-Manager', 'HR-Specialist']}},
  {path: 'header', component:HeaderComponent, canActivate:[AuthGuard]},
  {path: 'place-day-off-request/:userId', component:PlaceDayOffRequestComponent},
  {path: 'change-password/:userId', component:ChangePasswordComponent},
  {path: 'forbidden', component:ForbiddenComponent},
  {path: 'role-list', component:RoleListComponent},
  {path: 'role-user-list/:roleId', component:RoleUserListComponent},
  {path: 'add-role', component:AddRoleComponent, canActivate:[AuthGuard], data: {roles: ['Admin']} },

  {path: 'add-skill', component:AddSkillComponent ,  canActivate:[AuthGuard], data: {roles: ['Admin', 'HR-Manager', 'HR-Specialist']}},
  {path: 'skill-list', component:SkillListComponent},
  {path: 'skill-user-list/:skillId', component:SkillUserListComponent},

  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
