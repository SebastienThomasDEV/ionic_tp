import { Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";

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
    canActivate: [AuthGuard],
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'feed',
    canActivate: [AuthGuard],
    loadComponent: () => import('./feed/feed.page').then( m => m.FeedPage)
  },
  {
    path: 'parameters',
    canActivate: [AuthGuard],
    loadComponent: () => import('./parameters/parameters.page').then( m => m.ParametersPage)
  },
  {
    path: 'nav',
    canActivate: [AuthGuard],
    loadComponent: () => import('./nav/nav.page').then( m => m.NavPage)
  },
  {
    path: 'favorites',
    canActivate: [AuthGuard],
    loadComponent: () => import('./favorites/favorites.page').then( m => m.FavoritesPage)
  },
];
