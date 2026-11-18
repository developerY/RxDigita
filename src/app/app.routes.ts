import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'RxDigita — Biotech & Health',
  },
  {
    path: 'platforms',
    loadComponent: () => import('./pages/platforms/platforms').then((m) => m.Platforms),
    title: 'Platforms — RxDigita',
  },
  {
    path: 'health-living',
    loadComponent: () =>
      import('./pages/health-living/health-living').then((m) => m.HealthLiving),
    title: 'Health & Connected Living — RxDigita',
  },
  {
    path: 'innovation',
    loadComponent: () => import('./pages/innovation/innovation').then((m) => m.Innovation),
    title: 'Innovation & Digital Therapeutics — RxDigita',
  },
  {
    path: 'company-legacy',
    loadComponent: () =>
      import('./pages/company-legacy/company-legacy').then((m) => m.CompanyLegacy),
    title: 'Company & Legacy — RxDigita',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
