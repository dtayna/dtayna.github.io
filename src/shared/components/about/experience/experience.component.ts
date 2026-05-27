import { Component, input } from '@angular/core';
import { Experience } from '../../../models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  info = input.required<Experience>();
}
