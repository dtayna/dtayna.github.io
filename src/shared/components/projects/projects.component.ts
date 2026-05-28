import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  personalProjects : Project[] = [
    {
      title: 'Lang Learning Assistant',
      link: 'https://github.com/dtayna/lang-learning-assistant',
      linkLabel: 'Visit repository',
      image: 'assets/images/lang-learning.png',
      description:
        'Language learning platform developed with Angular and FastAPI.'
    },
    {
      title: 'Game Development Projects',
      link: 'https://dtayna.itch.io',
      linkLabel: 'View my games on itch.io',
      image: 'assets/images/itchio.png',
      description:
        'Collection of game development projects created with Godot.'
    },
    {
      title: 'Colors Mini Game',
      link: 'https://github.com/dtayna/colors-mini-game',
      linkLabel: 'Visit repository',
      image: 'assets/images/colorsminigame.png',
      description:
        'Puzzle mini game built with HTML, CSS, and JavaScript where players swap colored cups to discover the correct order.'
    }
  ];

  professionalProjects : Project[] = [
    {
      title: 'Nísia Chatbot Platform',
      link: 'https://api.whatsapp.com/send?phone=558134259990',
      linkLabel: 'Talk with Nísia',
      image: 'assets/images/nisia.jpeg',
      description:
         'Frontend development and backend testing support for a chatbot knowledge base management platform used by TRF5.'
    },
    {
      title: 'Hígia',
      link: 'https://www.jfrn.jus.br/imprensa/noticias/leitura-noticia?id=3139',
      linkLabel: 'Read article',
      image: 'assets/images/higia.png',
      description:
        'Web platform for creating, managing, and filling out forensic examination forms for JFRN.'
    },
    {
      title: 'Site SUEF',
      link: 'https://github.com/dtayna/site-suef',
      linkLabel: 'Visit repository',
      image: 'assets/images/sitesuef.png',
      description:
         'Frontend developed with React for the SUEF department of the Department of Education.'
    }
  ]
}
