import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionNav } from '../../shared/services/section-nav';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  protected readonly year = new Date().getFullYear();
  protected readonly sectionNav = inject(SectionNav);
}
