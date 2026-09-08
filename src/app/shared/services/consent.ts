import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ConsentChoice = 'accepted' | 'necessary-only';

const STORAGE_KEY = 'lse-cookie-consent';

/**
 * Tracks the visitor's cookie choice. No analytics/marketing scripts are wired
 * up yet — when one is added (GA4, Meta Pixel, etc.), gate its bootstrap on
 * `hasAnalyticsConsent()` so it only loads after "Accept all".
 */
@Injectable({ providedIn: 'root' })
export class Consent {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly choice = signal<ConsentChoice | null>(this.readStored());

  readonly hasDecided = () => this.choice() !== null;
  readonly hasAnalyticsConsent = () => this.choice() === 'accepted';

  setChoice(choice: ConsentChoice): void {
    this.choice.set(choice);
    if (!this.isBrowser) return;
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Storage unavailable (private browsing, etc.) — the choice still holds for this session.
    }
  }

  private readStored(): ConsentChoice | null {
    if (!this.isBrowser) return null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'accepted' || stored === 'necessary-only' ? stored : null;
    } catch {
      return null;
    }
  }
}
