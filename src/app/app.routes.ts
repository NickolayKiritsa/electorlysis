import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Terms } from './pages/terms/terms';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Luxury Skin Electrolysis — Permanent Hair Removal in Kirkland, WA',
  },
  { path: 'privacy-policy', component: PrivacyPolicy, title: 'Privacy Policy — Luxury Skin Electrolysis' },
  { path: 'terms', component: Terms, title: 'Terms of Service — Luxury Skin Electrolysis' },
  { path: '**', redirectTo: '' },
];
