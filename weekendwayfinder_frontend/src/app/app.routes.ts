import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./components/sign-in/sign-in.component').then(m => m.SignInComponent),
    title: 'Sign In'
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    title: 'Home'
  },
  {
    path: 'trip-planner',
    loadComponent: () => import('./components/trip-planner/trip-planner.component').then(m => m.TripPlannerComponent),
    title: 'Plan Your Trip'
  },
  {
    path: '**',
    redirectTo: 'sign-in'
  }
];
