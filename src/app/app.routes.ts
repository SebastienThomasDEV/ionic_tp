import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'feed',
    loadComponent: () => import('./feed/feed.page').then( m => m.FeedPage)
  },
  {
    path: 'parameters',
    loadComponent: () => import('./parameters/parameters.page').then( m => m.ParametersPage)
  },
];
