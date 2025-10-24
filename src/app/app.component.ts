import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Current year, used in the footer.
   */
  currentYear: number = new Date().getFullYear();

  /**
   * Smoothly scrolls to a section by id.
   *
   * @param section The section id to scroll to
   */
  scrollTo(section: string): void {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}