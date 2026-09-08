import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

interface Step {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-process',
  imports: [RevealOnScroll],
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {
  protected readonly steps: Step[] = [
    {
      number: '01',
      title: 'Consultation',
      description:
        'Free assessment of your hair growth, skin, and goals — no obligation.',
    },
    {
      number: '02',
      title: 'Treatment Plan',
      description: 'Session length, frequency, and target areas, mapped out together.',
    },
    {
      number: '03',
      title: 'Sessions Begin',
      description: 'Short, consistent visits — most clients start every one to two weeks.',
    },
    {
      number: '04',
      title: 'Aftercare',
      description: 'Simple guidance to protect treated skin between visits.',
    },
    {
      number: '05',
      title: 'Graduation',
      description: "As regrowth slows, sessions space out — until you're finished for good.",
    },
  ];
}
