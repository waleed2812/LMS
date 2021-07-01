import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
        data: {},
      },
      {
        path: 'features',
        loadChildren: () => import('./features/features.module').then((m) => m.FeaturesModule),
        data: {},
      },
      {
        path: 'login',
        redirectTo: '/login',
      },
      {
        path: '**',
        redirectTo: '/dashboard',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
