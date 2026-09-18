import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

interface VisitRequest {
  name: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-book-visit',
  imports: [ReactiveFormsModule, RevealOnScroll],
  templateUrl: './book-visit.html',
  styleUrl: './book-visit.scss',
})
export class BookVisit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  protected readonly copied = signal(false);

  protected readonly form = this.fb.group({
    name: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
    phone: this.fb.control('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^[\d\s()+-]{7,}$/)],
    }),
    message: this.fb.control('', { nonNullable: true }),
  });

  protected get name() {
    return this.form.controls.name;
  }

  protected get phone() {
    return this.form.controls.phone;
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const request: VisitRequest = this.form.getRawValue();
    // TODO: wire up to a real booking/CRM endpoint — this only logs locally for now.
    console.info('Visit request captured locally (no backend wired yet):', request);

    this.form.reset();
    this.router.navigateByUrl('/thank-you');
  }

  protected async copyAddress(): Promise<void> {
    try {
      await navigator.clipboard.writeText('156 Lake Street S, Kirkland, WA 98033');
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently, button still shows the address on the card.
    }
  }
}
