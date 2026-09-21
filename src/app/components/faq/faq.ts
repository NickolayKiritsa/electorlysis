import { Component, signal } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

interface FaqItem {
  question: string;
  answer: string;
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
      question: 'What is electrolysis?',
      answer:
        'A treatment that destroys the hair follicle itself with a tiny electrical current, so the hair can\'t grow back — not a reduction, a removal.',
    },
    {
      question: 'Is electrolysis permanent?',
      answer:
        'Yes. It\'s the only hair removal method the FDA recognizes as permanent, for any hair type.',
    },
    {
      question: 'How does it work?',
      answer:
        'A fine, sterile probe is inserted into the follicle and a small current disables it — then the hair is gently lifted out.',
    },
    {
      question: 'How long does the full process take?',
      answer:
        'Most clients finish somewhere between a few months and about a year, depending on the area and how much hair there is.',
    },
    {
      question: 'How many sessions will I need?',
      answer:
        'It varies by area and hair density — your electrologist gives you a realistic estimate at your consultation.',
    },
    {
      question: 'How often should I come?',
      answer: 'Every 1–2 weeks at the start, then further apart as regrowth slows down.',
    },
    {
      question: 'Does it work on all hair colors and skin tones?',
      answer:
        'Yes — unlike laser, electrolysis works on every hair color (including gray and blonde) and every skin tone.',
    },
    {
      question: 'What areas do you treat?',
      answer: 'Anywhere on the body: underarms, bikini line, legs, abdomen, chest, back, and more.',
    },
    {
      question: 'How long should the hair be?',
      answer:
        'Just visible above the skin — about 3-5 days of growth is plenty for your electrologist to work with.',
    },
    {
      question: 'Can I shave between appointments?',
      answer: 'Yes, shaving is fine between sessions. Just avoid waxing, plucking, or threading.',
    },
    {
      question: 'How should I prepare?',
      answer:
        'Skip caffeine beforehand, avoid sun exposure on the area, and don\'t tweeze or wax it before your visit.',
    },
    {
      question: 'What should I do after treatment?',
      answer:
        'Avoid sun, sweat, and touching the area for a day or so — your electrologist walks you through full aftercare at your first visit.',
    },
    {
      question: 'What skin reaction is normal?',
      answer:
        'Mild redness or small bumps for a few hours to a day, similar to a light scratch. It fades quickly.',
    },
    {
      question: 'Does it hurt?',
      answer:
        'Most describe a brief warm or pinching feeling at each follicle — more of a sensation than real pain. Numbing options are available.',
    },
  ];

  protected readonly openIndex = signal<number | null>(0);

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
