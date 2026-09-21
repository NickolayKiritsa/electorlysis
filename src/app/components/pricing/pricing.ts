import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

interface PriceRow {
  service: string;
  length: string;
  price: string;
}

@Component({
  selector: 'app-pricing',
  imports: [RevealOnScroll],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {
  protected readonly rows: PriceRow[] = [
    { service: 'Body Electrolysis', length: '30 min', price: '$65.00' },
    { service: 'Body Electrolysis', length: '1 hour', price: '$105.00' },
    { service: 'Body Electrolysis', length: '1 hr 30 min', price: '$150.00' },
  ];
}
