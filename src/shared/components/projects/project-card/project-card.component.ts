import { Component, input } from '@angular/core';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  info = input.required<Project>();
}