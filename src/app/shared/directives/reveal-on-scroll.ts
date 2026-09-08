import {
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
} from '@angular/core';

/**
 * Adds `.is-visible` to the host once it scrolls into view, so component
 * styles can drive a fade/slide-up via CSS transition. Skips the observer
 * entirely under prefers-reduced-motion so content just renders in place.
 *
 * Runs inside `afterNextRender`, which only fires in the browser — this
 * directive is a no-op during server-side prerendering, where `window` and
 * `IntersectionObserver` don't exist.
 */
@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScroll {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly revealDelay = input(0, { alias: 'appRevealOnScrollDelay' });

  constructor() {
    afterNextRender(() => {
      const el = this.elementRef.nativeElement;
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (prefersReducedMotion) {
        el.classList.add('is-visible');
        return;
      }

      el.style.setProperty('--reveal-delay', `${this.revealDelay()}ms`);

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              el.classList.add('is-visible');
              observer.unobserve(el);
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
      );

      observer.observe(el);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
