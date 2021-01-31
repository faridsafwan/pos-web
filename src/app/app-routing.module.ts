import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { AuthComponent } from './layouts/auth/auth.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

import { LoginComponent } from './views/auth/login/login.component';
import { HomeComponent } from './views/dashboard/home/home.component';
import { ItemCreateComponent } from './views/dashboard/items/item-create/item-create.component';
import { ItemViewComponent } from './views/dashboard/items/item-view/item-view.component';

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
        children: [
          {
            path: 'view',
            component: ItemViewComponent,
          },
          {
            path: 'create',
            component: ItemCreateComponent,
          },
          { path: '', redirectTo: 'view', pathMatch: 'full' },
        ],
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
