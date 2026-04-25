import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'normal-search',
    loadComponent: () => import('./normal-search/normal-search').then((m) => m.NormalSearch),
  },
  {
    path: 'search-with-debouncing',
    loadComponent: () =>
      import('./search-with-debouncing/search-with-debouncing').then((m) => m.SearchWithDebouncing),
  },
  {
    path: 'handling-error-gracefully',
    loadComponent: () =>
      import('./handling-loading-error-gracefully/handling-loading-error-gracefully').then(
        (m) => m.HandlingLoadingErrorGracefully,
      ),
  },
  {
    path: '',
    redirectTo: 'normal-search',
    pathMatch: 'full',
  },
];
