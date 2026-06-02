import { Component, inject } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Contact } from '../../models/contact.model';
import contactData from '../../mocks/contacts.json';

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

  contacts : Contact[] = contactData.contacts;

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
