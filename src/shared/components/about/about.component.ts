import { Component } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { Education } from '../../models/education.model';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import experiencesData from '../../mocks/experiences.json';
import educationData from '../../mocks/education.json'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ExperienceComponent, EducationComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  experiences: Experience[] = experiencesData.experiences as Experience[];
  education : Education[] = educationData.education as Education[];


}
