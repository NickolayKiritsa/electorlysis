import { Component, signal } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-book-visit',
  imports: [RevealOnScroll],
  templateUrl: './book-visit.html',
  styleUrl: './book-visit.scss',
})
export class BookVisit {
  protected readonly copied = signal(false);

  protected async copyAddress(): Promise<void> {
    try {
      await navigator.clipboard.writeText('1103 A St NE, Auburn, WA 98002');
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently, button still shows the address on the card.
    }
  }
}
