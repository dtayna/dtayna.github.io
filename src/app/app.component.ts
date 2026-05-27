import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "../shared/components/nav/nav.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { HeaderComponent } from '../shared/components/header/header.component';
import { AboutComponent } from "../shared/components/about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, HeaderComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-website';
}
