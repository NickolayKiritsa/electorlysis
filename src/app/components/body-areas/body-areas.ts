import { Component, ElementRef, viewChild } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-body-areas',
  imports: [RevealOnScroll],
  templateUrl: './body-areas.html',
  styleUrl: './body-areas.scss',
})
export class BodyAreas {
  private readonly track = viewChild<ElementRef<HTMLElement>>('track');

  protected scrollByCard(direction: 1 | -1): void {
    const el = this.track()?.nativeElement;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.area-card');
    const step = (card?.offsetWidth ?? 260) + 24;
    el.scrollBy({ left: step * direction, behavior: 'smooth' });
  }
}
