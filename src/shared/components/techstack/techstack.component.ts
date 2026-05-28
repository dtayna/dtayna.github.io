import { Component, OnInit, inject } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-techstack',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './techstack.component.html',
  styleUrl: './techstack.component.scss'
})
export class TechstackComponent implements OnInit {

  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);


  techIcons : string[] = [
    'angular',
    'typescript',
    'javascript',
    'css',
    'java',
    'python',
    'haskell',
    'linux',
    'godot'
  ]

  groups = {
    languages : [
      'JavaScript',
      'TypeScript',
      'Java',
      'Python',
      'Haskell' 
    ],
    backend : [
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'Docker',
      'Pytest',
      'Node.js' 
    ],
    frontend : [
      'HTML5',
      'CSS3',
      'Angular',
      'Bootstrap',
      'Tailwind CSS',
      'Sass',
      'React' 
    ],
    gameDev : [
      'Godot Engine',
      'GDScript',
      'Procreate',
      'Blender',
    ],
    machineLearning : [
      'Python',
      'Pandas',
      'Langchain',
      'Numpy',
      'Mathplotlib'
    ],
    others : [
      'Linux',
      'Git',
      'Jira',
      'JUnit',
      'Android Studio'
    ]

  }

  groupTitles: Record<string, string> = {
    languages: 'Languages',
    backend: 'Backend',
    frontend: 'Frontend',
    gameDev: 'Game Development',
    machineLearning: 'Machine Learning',
    others: 'Others'
  };

  groupsIterable = Object.entries(this.groups);

  ngOnInit(): void {
    this.techIcons.forEach(techIcon => {
      this.iconRegistry.addSvgIconInNamespace(
        'custom',
        techIcon,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `/assets/icons/${techIcon}.svg`
        )
      );
    });
  }
}
