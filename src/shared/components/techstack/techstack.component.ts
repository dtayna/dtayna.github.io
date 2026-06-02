import { Component, OnInit, inject } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import techstackData from '../../mocks/techstack.json'

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

  groups = techstackData.techGroups;

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
