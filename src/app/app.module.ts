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
import { UserProjectsListComponent } from './User/user-projects-list/user-projects-list.component';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './LoginFiles/login/login.component';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptor } from './LoginFiles/_auth/auth.interceptor';
import { UserService } from './User/user.service';
import { UserComponent } from './User/user/user.component';
import { PlaceDayOffRequestComponent } from './dayOff/place-day-off-request/place-day-off-request.component';
import { ProjectUserListComponent } from './Project/project-user-list/project-user-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { RoleListComponent } from './Roles/role-list/role-list.component';
import { AddRoleComponent } from './Roles/add-role/add-role.component';
import { RoleUserListComponent } from './Roles/role-user-list/role-user-list.component';
import {MatMenuModule} from '@angular/material/menu';
import { RoleDialogComponent } from './User/role-dialog/role-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddEducationComponent } from './Education/add-education/add-education.component';
import { UpdateEducationComponent } from './Education/update-education/update-education.component';
import { UserEducationComponent } from './Education/user-education/user-education.component';
import { AddPersonalFileComponent } from './Personal Files/add-personal-file/add-personal-file.component';
import { UpdatePersonalFileComponent } from './Personal Files/update-personal-file/update-personal-file.component';
import { UserPersonalFileComponent } from './Personal Files/user-personal-file/user-personal-file.component';
import { AddTaskComponent } from './Task/add-task/add-task.component';
import { UpdateTaskComponent } from './Task/update-task/update-task.component';
import { UserTaskComponent } from './Task/user-task/user-task.component';
import { ProjectTaskComponent } from './Task/project-task/project-task.component';
import { AddUserToTaskComponent } from './Task/add-user-to-task/add-user-to-task.component';
import { RemoveRoleDialogComponent } from './User/remove-role-dialog/remove-role-dialog.component';
import { DayOffRequestsComponent } from './dayOff/day-off-requests/day-off-requests.component';

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
    UserProjectsListComponent,
    AdminComponent,
    ForbiddenComponent,
    LoginComponent,
    HeaderComponent,
    UserComponent,
    PlaceDayOffRequestComponent,
    ProjectUserListComponent,
    RoleListComponent,
    AddRoleComponent,
    RoleUserListComponent,
    RoleDialogComponent,
    AddEducationComponent,
    UpdateEducationComponent,
    UserEducationComponent,
    AddPersonalFileComponent,
    UpdatePersonalFileComponent,
    UserPersonalFileComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    UserTaskComponent,
    ProjectTaskComponent,
    AddUserToTaskComponent,
    RemoveRoleDialogComponent,
    DayOffRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [
  //   AuthGuard,
  //  { provide: HTTP_INTERCEPTORS,
  //   useClass:AuthInterceptor,
  //   multi:true
  // },
  UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
