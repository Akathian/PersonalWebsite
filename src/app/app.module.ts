import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { WebServiceComponent } from './components/web-service/web-service.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { JobComponent } from './components/experience/job/job.component';
import { SemesterComponent } from './components/education/semester/semester.component';
import { CourseComponent } from './components/education/semester/course/course.component';
import { ProjComponent } from './components/projects/proj/proj.component';
import { InstagramComponent } from './components/instagram/instagram.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';
import { NavComponent } from './components/shared/nav/nav.component';

import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { SkillComponent } from './components/skills/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WebServiceComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    JobComponent,
    SemesterComponent,
    CourseComponent,
    ProjComponent,
    InstagramComponent,
    NavComponent,
    SanitizeHtmlPipe,
    SkillComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
