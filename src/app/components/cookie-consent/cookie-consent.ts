import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Consent } from '../../shared/services/consent';

@Component({
  selector: 'app-cookie-consent',
  imports: [RouterLink],
  templateUrl: './cookie-consent.html',
  styleUrl: './cookie-consent.scss',
})
export class CookieConsent {
  protected readonly consent = inject(Consent);

  protected acceptAll(): void {
    this.consent.setChoice('accepted');
  }

  protected necessaryOnly(): void {
    this.consent.setChoice('necessary-only');
  }
}
