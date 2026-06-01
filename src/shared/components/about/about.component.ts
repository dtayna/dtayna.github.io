import { Component } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { Education } from '../../models/education.model';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ExperienceComponent, EducationComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  experiences : Experience[] = [
    {
      title: 'Entry-Level Test Engineer',
      company: 'IMD/Asus Brasil',
      companyIcon: 'assets/companys/imd.jpeg',
      startYear: 2026,
      endYear: 'Present'
    },
    {
      title: 'Front-End Developer',
      company: 'JFRN/UFRN',
      companyIcon: 'assets/companys/jfrn.jpeg',
      startYear: 2024,
      endYear: 2026
    },
    {
      title: 'Web Development Intern',
      company: 'SEEC',
      companyIcon: 'assets/companys/seec.png',
      startYear: 2023,
      endYear: 2023
    },
    {
      title: 'Technical Support Intern',
      company: 'SEEC',
      companyIcon: 'assets/companys/seec.png',
      startYear: 2021,
      endYear: 2022
    },
    {
      title: 'Teaching Assistant for Mathematical Foundations of Computer Science',
      company: 'UFRN',
      companyIcon: 'assets/companys/ufrn.png',
      startYear: 2020,
      endYear: 2023
    },
    {
      title: 'Technical Support Intern',
      company: 'ESIG',
      companyIcon: 'assets/companys/esig.png',
      startYear: 2019,
      endYear: 2021
    }
  ]

  education : Education[] = [
    {
      title: 'B.Sc. in Computer Science',
      institution: 'UFRN',
      progress: 90,
      startYear: 2024,
      endYear: 'Present',
    },
    {
      title: 'B.Sc. in Information Technology',
      institution: 'UFRN',
      progress: 100,
      startYear: 2019,
      endYear: 2023,
      hounors: true
    },{
      title: 'IT Technician',
      institution: 'IFRN',
      progress: 100,
      startYear: 2015,
      endYear: 2019
    }
  ]
}
