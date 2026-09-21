import { Component, DestroyRef, afterNextRender, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { BodyAreas } from '../../components/body-areas/body-areas';
import { Services } from '../../components/services/services';
import { Process } from '../../components/process/process';
import { CareGuide } from '../../components/care-guide/care-guide';
import { Pricing } from '../../components/pricing/pricing';
import { Faq } from '../../components/faq/faq';
import { Reviews } from '../../components/reviews/reviews';
import { FinalCta } from '../../components/final-cta/final-cta';
import { BookVisit } from '../../components/book-visit/book-visit';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    About,
    BodyAreas,
    Services,
    Process,
    CareGuide,
    Pricing,
    Faq,
    Reviews,
    FinalCta,
    BookVisit,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    const meta = inject(Meta);
    meta.updateTag({
      name: 'description',
      content:
        'Permanent, FDA-recognized electrolysis hair removal in Auburn, WA — one-on-one, by appointment only.',
    });
    meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Arriving from another page (e.g. footer "Book Consultation" while on /privacy-policy)
    // lands here with a fragment — scroll to that section once the page has rendered.
    afterNextRender(() => {
      const sub = this.route.fragment.subscribe((fragment) => {
        if (!fragment) return;
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      });
      this.destroyRef.onDestroy(() => sub.unsubscribe());
    });
  }
}
