import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-care-guide',
  imports: [RevealOnScroll],
  templateUrl: './care-guide.html',
  styleUrl: './care-guide.scss',
})
export class CareGuide {
  protected readonly beforeItems: string[] = [
    'Arrive hydrated',
    'Skip tweezing or waxing beforehand',
    "Leave the hair visible — no shaving right before",
    'Come with clean, product-free skin',
    'Underarms: skip deodorant that day',
  ];

  protected readonly aftercareItems: string[] = [
    'Mild redness or sensitivity is normal',
    'First 24 hours: avoid heavy sweat or intense workouts',
    'Skip tanning and prolonged sun on the area',
  ];
}
