import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-hero',
  imports: [RevealOnScroll],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
