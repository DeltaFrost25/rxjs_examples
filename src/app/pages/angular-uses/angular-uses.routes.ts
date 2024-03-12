import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./angular-uses.page').then((c) => c.AngularUsesPage),
    children: [
      {
        path: 'http',
        loadComponent: () =>
          import('./pages/http-calls/http-calls.page').then(
            (c) => c.HttpCallsPage
          ),
      },
      {
        path: 'reactive-forms',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/reactive-forms/reactive-forms.page').then(
            (c) => c.ReactiveFormsPage
          ),
      },
      {
        path: '**',
        redirectTo: 'reactive-forms',
      },
    ],
  },
];
