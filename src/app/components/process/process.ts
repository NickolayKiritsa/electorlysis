import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

interface Step {
  number: string;
  label: string;
  desc: string;
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
      label: 'Consultation',
      desc: "We map your goals and treatment areas at a complimentary consultation.",
    },
    {
      number: '02',
      label: 'Initial Clearance',
      desc: 'Your first sessions clear the hair that is actively growing in the treated area.',
    },
    {
      number: '03',
      label: 'Regrowth Cycles',
      desc: "Hair returns in cycles as dormant follicles activate — this is expected, not a setback.",
    },
    {
      number: '04',
      label: 'Follow-up Clearances',
      desc: 'Each cycle, we treat what has regrown. Every pass covers less than the last.',
    },
    {
      number: '05',
      label: 'Less Hair',
      desc: 'Regrowth thins over time until most follicles stop producing hair altogether.',
    },
    {
      number: '06',
      label: 'Permanent Results',
      desc: "What's cleared stays cleared — no maintenance visits, no repeat purchases.",
    },
  ];
}
