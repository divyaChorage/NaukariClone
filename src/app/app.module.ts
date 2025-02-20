import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudetPersonalDataComponent } from './student-dashboard/studet-personal-data/studet-personal-data.component';
import { ApplydriveComponent } from './student-dashboard/applydrive/applydrive.component';
import { RecruiterdashboardComponent } from './recruiterdashboard/recruiterdashboard.component';
import { RecruiterInfoComponent } from './recruiterdashboard/recruiter-info/recruiter-info.component';
import { CompaniesdataComponent } from './recruiterdashboard/companiesdata/companiesdata.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RecruiterLoginComponent,
    StudentLoginComponent,
    StudentDashboardComponent,
    StudetPersonalDataComponent,
    ApplydriveComponent,
    RecruiterdashboardComponent,
    RecruiterInfoComponent,
    CompaniesdataComponent,
 
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
