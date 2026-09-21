import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-services',
  imports: [RevealOnScroll],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {}
