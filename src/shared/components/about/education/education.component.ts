import { Component, input } from '@angular/core';
import { Education } from '../../../models/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  info = input.required<Education>();
}
