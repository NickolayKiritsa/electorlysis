import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  imports: [],
  templateUrl: './terms.html',
  styleUrl: './terms.scss',
})
export class Terms {
  constructor() {
    const meta = inject(Meta);
    meta.updateTag({
      name: 'description',
      content: "The terms that govern using Luxury Skin Electrolysis's website and booking a consultation.",
    });
    meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
