import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  navItems : MenuItem[] = [
    { name: 'About Me', sectionId: 'about'},
    { name: 'Tech Stack', sectionId: ''},
    { name: 'Projects', sectionId: ''},
    { name: 'Contact',  sectionId: ''},
    { name: 'GitHub', icon: 'github', url: 'https://github.com/dtayna/'},
  ];
}
