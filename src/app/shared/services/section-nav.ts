import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Scrolls to a section on the home page — from the home page itself, or by
 * navigating there first (with a fragment) when the visitor is on another
 * route, e.g. /privacy-policy.
 */
@Injectable({ providedIn: 'root' })
export class SectionNav {
  private readonly router = inject(Router);

  goTo(sectionId: string): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#') || this.router.url.startsWith('/?')) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    this.router.navigate(['/'], { fragment: sectionId });
  }
}
