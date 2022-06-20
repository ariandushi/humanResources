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


const routes: Routes = [
  {path: 'users', component : UserListComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'update-user/:userId', component:UpdateUserComponent},
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
  {path: 'add-project', component:AddProjectComponent},
  {path: 'update-project/:projectId', component:UpdateProjectComponent},
  {path: 'user-projects-list', component:UserProjectsListComponent},
  {path: 'project-user-list/:projectId', component:ProjectUserListComponent},

  // {path: 'project-user-list',
  //       children:[
  //         {path: ':userId' , component:ProjectUserListComponent},
  //         {path: ':projectId' , component:ProjectUserListComponent},
  //       ]},

  // {path: 'add-user-to-project',
  //       children:[
  //         {path: ':userId', component:AddUserToProjectComponent},
  //         {path: ':projectId', component:AddUserToProjectComponent},
  //       ]},
  {path: 'add-user-to-project/:projectId', component:AddUserToProjectComponent},
  {path: 'add-project-to-user/:userId', component:AddProjectToUserComponent},
  {path: 'add-address/:userId', component:AddAddressComponent},
  {path: 'user-address', component:UserAddressComponent},
  {path: 'add-certifications/:userId', component:AddCertificationsComponent},
  {path: 'update-certifications/:userId', component:UpdateCertificationsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'admin', component:AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path: 'place-day-off-request/:userId', component:PlaceDayOffRequestComponent},
  {path: 'admin1', component:AdminComponent},
  {path:'', redirectTo:'users', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
