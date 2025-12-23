import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from './services/resume.service';
import { HeaderComponent } from './components/header/header.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { recommendationsComponent } from './components/recommendations/recommendations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SummaryComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    recommendationsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  resumeData: any = null;
  loading = true;
  error = '';

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.loadResumeData();
  }

  loadResumeData() {
    this.resumeService.getResumeData().subscribe(
      (data) => {
        this.resumeData = data;
        this.loading = false;
      },
      (err) => {
        this.error = 'Failed to load resume data';
        this.loading = false;
      }
    );
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }
}
