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

  languages : string[] = [
    'JavaScript',
    'TypeScript',
    'Java',
    'Python',
    'Haskell' 
  ]

  backend : string[] = [
    'FastAPI',
    'SQLAlchemy',
    'PostgreSQL',
    'Docker',
    'Pytest',
    'Node.js' 
  ]

  frontend : string[] = [
    'HTML5',
    'CSS3',
    'Angular',
    'Bootstrap',
    'Tailwind CSS',
    'Sass',
    'React' 
  ]

  gameDev : string[] = [
    'Godot Engine',
    'GDScript'
  ]

  machineLearning : string[] = [
    'Python',
    'Pandas',
    'Langchain',
    'Numpy',
    'Mathplotlib'
  ]

  others : string[] = [
    'Linux',
    'Git',
    'Jira',
    'JUnit',
    'Android Studio'
  ]
    
  



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
