import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from './project-card/project-card.component';
import projectsData from '../../mocks/projects.json';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  personalProjects : Project[] = projectsData.personalProjects;
  professionalProjects : Project[] = projectsData.professionalProjects;
  
}
