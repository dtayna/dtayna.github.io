import { Component, inject } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Contact } from '../../models/contact.model';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  contacts : Contact[] = [
    {
      label: 'dtayna',
      icon: 'github',
      link: 'https://github.com/dtayna'
    },
    {
      label: 'dtayna',
      icon: 'telegram',
    },
    {
      label: 'Débora Tayná',
      icon: 'linkedin',
      link: 'https://br.linkedin.com/in/d%C3%A9bora-tayn%C3%A1-98733a213'
    },
    {
      label: 'dtayna.3194@gmail.com',
      icon: 'email',
      link: 'mailto:dtayna.3194@gmail.com'
    }
  ];

  ngOnInit(): void {
    this.contacts.forEach(contact => {
      this.iconRegistry.addSvgIconInNamespace(
        'custom',
        contact.icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `/assets/icons/${contact.icon}.svg`
        )
      );
    });
  }
}
