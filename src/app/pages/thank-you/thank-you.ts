import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-thank-you',
  imports: [RouterLink],
  templateUrl: './thank-you.html',
  styleUrl: './thank-you.scss',
})
export class ThankYou {
  constructor() {
    const meta = inject(Meta);
    meta.updateTag({
      name: 'description',
      content: 'Your request has been received — Luxury Skin Electrolysis will be in touch shortly.',
    });
    // Confirmation page — nothing here is worth indexing or landing on from search.
    meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}
