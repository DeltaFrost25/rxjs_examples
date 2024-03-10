import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    loadComponent: () =>
      import('./pages/observables/observables.page').then(
        (c) => c.ObservablesPage
      ),
  },
];
