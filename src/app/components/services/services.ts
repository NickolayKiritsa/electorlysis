import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

interface ServiceRow {
  number: string;
  name: string;
  description: string;
  link?: { label: string; href: string };
}

@Component({
  selector: 'app-services',
  imports: [RevealOnScroll],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly rows: ServiceRow[] = [
    { number: '02', name: 'Waxing', description: 'For between sessions, or on its own.' },
    {
      number: '03',
      name: 'Facials',
      description: 'Keeps skin as cared-for as your hair-free areas.',
    },
    {
      number: '04',
      name: 'Consultation',
      description: 'Free, no-pressure.',
      link: { label: 'Book now', href: '#visit' },
    },
  ];
}
