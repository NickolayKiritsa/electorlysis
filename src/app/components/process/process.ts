import { Component, signal } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

interface Step {
  number: string;
  label: string;
  desc: string;
}
export interface ProcessStep {
  number: string;
  label: string;
  phase: string;
  desc: string;
  duration?: string;
}

@Component({
  selector: 'app-process',
  imports: [RevealOnScroll],
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {
  readonly activeIndex = signal<number>(0);
  readonly steps: ProcessStep[] = [
    {
      number: '01',
      label: 'Anagen (Active Growth)',
      phase: 'Primary Target',
      desc: 'The optimal window. An ultra-fine probe reaches the active dermal papilla, using calibrated current to permanently neutralize the blood supply and germ cells at the root.',
      duration: 'Pass 1'
    },
    {
      number: '02',
      label: 'Catagen (Transition)',
      phase: 'Follicle Regression',
      desc: 'The hair detaches from the papilla and the follicle contracts. Treating hairs in this brief window is less definitive, which is why systematic clearances over time are essential.',
      duration: 'Week 2–3'
    },
    {
      number: '03',
      label: 'Telogen & Awakening',
      phase: 'Next Growth Cycle',
      desc: 'Resting follicles gradually re-awaken into new Anagen cycles. Scheduled clearances capture each successive wave until every single dormant follicle has been treated.',
      duration: 'Month 2–6'
    },
    {
      number: '04',
      label: '100% Permanent Clearance',
      phase: 'Definitive Result',
      desc: 'True permanent hair removal. Once the growth cells of a follicle are destroyed via electrology, that follicle cannot regenerate hair — ever. No endless maintenance required.',
      duration: 'Permanent'
    }
  ];
  setActive(index: number): void {
    this.activeIndex.set(index);
  }
}
