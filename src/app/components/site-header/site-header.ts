import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionNav } from '../../shared/services/section-nav';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly navOpen = signal(false);
  protected readonly tickerPaused = signal(false);
  protected readonly sectionNav = inject(SectionNav);

  protected readonly tickerItems: string[] = [
    'By appointment only',
    'FDA-recognized — truly permanent',
    'Complimentary consultations',
    'One-on-one care, every visit',
    '(253) 269-8989',
    'Ask about multi-session packages',
    'Serving Auburn, WA',
  ];

  protected toggleNav(): void {
    this.navOpen.update((open) => !open);
  }

  protected closeNav(): void {
    this.navOpen.set(false);
  }

  protected toggleTicker(): void {
    this.tickerPaused.update((paused) => !paused);
  }

  protected goToSection(sectionId: string): void {
    this.closeNav();
    this.sectionNav.goTo(sectionId);
  }
}
