import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    UpdateCertificationsComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
