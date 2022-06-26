import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { UserListComponent } from './User/user-list/user-list.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { AddExperienceComponent } from './Experience/add-experience/add-experience.component';
import { UserExperienceComponent } from './Experience/user-experience/user-experience.component';
import { UpdateExperienceComponent } from './Experience/update-experience/update-experience.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectListComponent } from './Project/project-list/project-list.component';
import { AddProjectComponent } from './Project/add-project/add-project.component';
import { UpdateProjectComponent } from './Project/update-project/update-project.component';
import { AddUserToProjectComponent } from './Project/add-user-to-project/add-user-to-project.component';
import { UserAddressComponent } from './Address/user-address/user-address.component';
import { AddAddressComponent } from './Address/add-address/add-address.component';
import { UpdateAddressComponent } from './Address/update-address/update-address.component';
import { AddCertificationsComponent } from './Certifications/add-certifications/add-certifications.component';
import { UpdateCertificationsComponent } from './Certifications/update-certifications/update-certifications.component';
import { AddProjectToUserComponent } from './User/add-project-to-user/add-project-to-user.component';
import { UserProjectsListComponent } from './User/user-projects-list/user-projects-list.component';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './LoginFiles/login/login.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './LoginFiles/_auth/auth.guard';
import { AuthInterceptor } from './LoginFiles/_auth/auth.interceptor';
import { UserService } from './User/user.service';
import { PlaceDayOffRequestComponent } from './dayOff/place-day-off-request/place-day-off-request.component';
import { ProjectUserListComponent } from './Project/project-user-list/project-user-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { DayOffRequestsComponent } from './dayOff/day-off-requests/day-off-requests.component';
import { AssignTaskComponent } from './Tasks/assign-task/assign-task.component';
import { TaskListComponent } from './Tasks/task-list/task-list.component';
import { RoleListComponent } from './Roles/role-list/role-list.component';
import { RoleUserListComponent } from './Roles/role-user-list/role-user-list.component';
import { AddRoleComponent } from './Roles/add-role/add-role.component';
import { ChangePasswordComponent } from './User/change-password/change-password.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UpdateUserComponent,
    AddUserComponent,
    AddExperienceComponent,
    UserExperienceComponent,
    UpdateExperienceComponent,
    ProfileComponent,
    ProjectListComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    AddUserToProjectComponent,
    UserAddressComponent,
    AddAddressComponent,
    UpdateAddressComponent,
    AddCertificationsComponent,
    UpdateCertificationsComponent,
    AddProjectToUserComponent,
    UserProjectsListComponent,
    AdminComponent,
    ForbiddenComponent,
    LoginComponent,
    HeaderComponent,
    PlaceDayOffRequestComponent,
    ProjectUserListComponent,
    DayOffRequestsComponent,
    AssignTaskComponent,
    TaskListComponent,
    RoleListComponent,
    RoleUserListComponent,
    AddRoleComponent,
    ChangePasswordComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
   { provide: HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },
  LoginComponent,
  UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
