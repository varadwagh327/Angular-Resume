import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ResumeData {
  personalDetails: {
    name: string;
    role: string;
    location: string;
    phone: string;
    email: string;
    photo: string;
    portfolioLinks: {
      linkedin: string;
      github: string;
      website: string;
    };
  };
  professionalSummary: string;
  technicalSkills: {
    frontend: string[];
    backend: string[];
    databases: string[];
    toolsDevOps: string[];
    testing: string[];
  };
  workExperience: Array<{
    title: string;
    company: string;
    duration: string;
    responsibilities: string[];
  }>;
  projects: Array<{
    title: string;
    technologies: string[];
    description: string;
    github: string;
    demo: string;
  }>;
  education: {
    degree: string;
    university: string;
    year: string;
  };
  certificationsAchievements: Array<{
    title: string;
    issuer: string;
  }>;
  extraCurricularActivities: any[];
  references: any[];
}

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private dataUrl = 'assets/data/resume.json';

  constructor(private http: HttpClient) {}

  getResumeData(): Observable<ResumeData> {
    return this.http.get<ResumeData>(this.dataUrl);
  }
}
