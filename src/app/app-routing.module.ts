import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { AuthComponent } from './layouts/auth/auth.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

import { LoginComponent } from './views/auth/login/login.component';
import { HomeComponent } from './views/dashboard/home/home.component';
import { ItemsViewComponent } from './views/dashboard/items/items-view.component';

const routes: Routes = [
  // Dashboard views
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'items',
        component: ItemsViewComponent,
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },

  // Auth views
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },

  // No Layout views
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
