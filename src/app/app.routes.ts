import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/observables/observables.page').then(
        (c) => c.ObservablesPage
      ),
  },
  {
    path: 'pipes',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/pipes/pipes.page').then((c) => c.PipesPage),
  },
  {
    path: 'angular-uses',
    loadChildren: () =>
      import('./pages/angular-uses/angular-uses.routes').then(
        ({ routes }) => routes
      ),
  },
  {
    path: '**',
    redirectTo: 'angular-uses',
  },
];
