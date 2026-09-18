import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Terms } from './pages/terms/terms';
import { ThankYou } from './pages/thank-you/thank-you';
import { NotFound } from './pages/not-found/not-found';

const notFoundTitle = 'Page Not Found — Luxury Skin Electrolysis';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Luxury Skin Electrolysis — Permanent Hair Removal in Kirkland, WA',
  },
  { path: 'privacy-policy', component: PrivacyPolicy, title: 'Privacy Policy — Luxury Skin Electrolysis' },
  { path: 'terms', component: Terms, title: 'Terms of Service — Luxury Skin Electrolysis' },
  { path: 'thank-you', component: ThankYou, title: 'Thank You — Luxury Skin Electrolysis' },
  // Real, concrete path so this gets prerendered to its own static HTML file —
  // that file is what the deploy workflow copies to 404.html for GitHub Pages.
  { path: 'not-found', component: NotFound, title: notFoundTitle },
  { path: '**', component: NotFound, title: notFoundTitle },
];
