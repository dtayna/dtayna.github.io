import { Component, input, inject,  OnInit } from '@angular/core';
import { MenuItem } from '../../../models/menu-item.model';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent implements OnInit {
  info = input.required<MenuItem>();

  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    const icon = this.info().icon;

    if (!icon) return;

    this.iconRegistry.addSvgIconInNamespace(
      'custom',
      icon,
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `/assets/icons/${icon}.svg`
      )
    );
  }
}
