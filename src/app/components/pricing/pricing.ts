import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

interface PriceRow {
  length: string;
  bestFor: string;
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
    { length: '15 minutes', bestFor: 'Small areas — lip, chin, eyebrows', price: '$55' },
    { length: '30 minutes', bestFor: 'Underarms, bikini line, hairline', price: '$95' },
    { length: '45 minutes', bestFor: 'Larger zones — abdomen, thighs', price: '$130' },
    { length: '60 minutes', bestFor: 'Legs, back, chest', price: '$165' },
  ];
}
