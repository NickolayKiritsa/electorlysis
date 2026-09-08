import { Component, ElementRef, viewChild } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

interface Review {
  name: string;
  initial: string;
  rating: number;
  relativeTime: string;
  text: string;
}

@Component({
  selector: 'app-reviews',
  imports: [RevealOnScroll],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
  // Mock reviews for now — swap in the studio's real Google reviews once available.
  protected readonly aggregateScore = 4.9;
  protected readonly aggregateCount = 187;

  protected readonly reviews: Review[] = [
    {
      name: 'Whitney M.',
      initial: 'W',
      rating: 5,
      relativeTime: '2 weeks ago',
      text: "I'd tried laser twice before with no real results — electrolysis at Luxury Skin is the first thing that's actually worked. Claire is meticulous and the studio feels more like a quiet spa than a clinic.",
    },
    {
      name: 'Priya S.',
      initial: 'P',
      rating: 5,
      relativeTime: '1 month ago',
      text: 'Booking was easy and the consultation was genuinely no-pressure. Six sessions in on my chin and upper lip and the regrowth has slowed dramatically. Worth every appointment.',
    },
    {
      name: 'Meredith L.',
      initial: 'M',
      rating: 5,
      relativeTime: '1 month ago',
      text: "Didn't expect it to be this comfortable, honestly. Numbing cream option was offered upfront and nobody rushed me through it. First place that's treated electrolysis like a real specialty instead of an upsell.",
    },
    {
      name: 'Courtney B.',
      initial: 'C',
      rating: 5,
      relativeTime: '2 months ago',
      text: "One-on-one the entire time, every visit, same electrologist. That consistency alone makes it worth going here over the bigger med spas in the area.",
    },
    {
      name: 'Hannah T.',
      initial: 'H',
      rating: 5,
      relativeTime: '3 months ago',
      text: "Started with my underarms as a test run before committing to more areas. Genuinely permanent — it's been months and nothing has come back. Wish I'd started years ago instead of laser.",
    },
  ];

  private readonly track = viewChild<ElementRef<HTMLElement>>('track');

  protected scrollByCard(direction: 1 | -1): void {
    const el = this.track()?.nativeElement;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.review-card');
    const step = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: step * direction, behavior: 'smooth' });
  }
}
