import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  constructor() {
    inject(Meta).updateTag({
      name: 'description',
      content: 'How Luxury Skin Electrolysis collects, uses, and protects your information.',
    });
  }
}
