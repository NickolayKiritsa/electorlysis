import { Component, signal } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

interface FaqItem {
  question: string;
  answer?: string;
}

@Component({
  selector: 'app-faq',
  imports: [RevealOnScroll],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  protected readonly items: FaqItem[] = [
    {
      question: 'Does electrolysis hurt?',
      answer:
        'Most clients describe a brief warm or pinching sensation at each follicle — far more tolerable than expected. Numbing options are available for sensitive areas.',
    },
    {
      question: 'Is electrolysis really permanent — more than laser?',
      answer:
        'Yes. Electrolysis is the only method the FDA recognizes as permanent hair removal, effective on every hair color and skin tone — including light, gray, and red hair that laser cannot treat.',
    },
    {
      question: 'How many sessions will I need?',
      answer:
        'Timelines vary by hair density, area, and hormonal factors. Most clients see permanent clearance after a series of sessions spaced days to weeks apart — your electrologist maps out a personalized plan at your consultation.',
    },
    {
      question: 'Is it safe for sensitive or darker skin tones?',
      answer:
        'Yes. Unlike laser, electrolysis works by targeting the follicle directly rather than pigment in the skin, so it is considered safe across all skin tones.',
    },
    {
      question: 'What should I avoid before and after treatment?',
      answer:
        'Avoid sun exposure, tanning, and retinol products on the treatment area in the days before and after your session. Your electrologist will walk you through full aftercare at your first visit.',
    },
    {
      question: 'Do you accept HSA/FSA or offer payment plans?',
      answer:
        'Ask at your consultation — we can walk through what your HSA/FSA covers and any available package options.',
    },
  ];

  protected readonly openIndex = signal<number | null>(0);

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
