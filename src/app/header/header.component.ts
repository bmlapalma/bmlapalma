import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**
   * Scroll to section by id when a navigation link is clicked.
   *
   * @param section Section identifier (id)
   */
  isNavbarCollapsed = true;
  
  scrollToSection(section: string): void {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}