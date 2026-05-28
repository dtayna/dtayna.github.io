import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MenuItemComponent, MatIcon],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  menuOpen = false;

  navItems : MenuItem[] = [
    { name: 'About Me', sectionId: 'about'},
    { name: 'Tech Stack', sectionId: 'techstack'},
    { name: 'Projects', sectionId: 'projects'},
    { name: 'Contact',  sectionId: 'contact'},
    { name: 'Itch.io', icon: 'itchio', url: 'https://dtayna.itch.io/'},
    { name: 'GitHub', icon: 'github', url: 'https://github.com/dtayna/'},
  ];
}
