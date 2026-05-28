import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "../shared/components/nav/nav.component";
import { HeaderComponent } from '../shared/components/header/header.component';
import { AboutComponent } from "../shared/components/about/about.component";
import { ContactComponent } from "../shared/components/contact/contact.component";
import { TechstackComponent } from '../shared/components/techstack/techstack.component';
import { ProjectsComponent } from "../shared/components/projects/projects.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    TechstackComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-website';
}
