import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { AuthComponent } from './layouts/auth/auth.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

import { LoginComponent } from './views/auth/login/login.component';
import { CustomerCreateComponent } from './views/dashboard/customers/customer-create/customer-create.component';
import { CustomerViewComponent } from './views/dashboard/customers/customer-view/customer-view.component';
import { EmployeeCreateComponent } from './views/dashboard/employers/employee-create/employee-create.component';
import { EmployeeViewComponent } from './views/dashboard/employers/employee-view/employee-view.component';
import { HomeComponent } from './views/dashboard/home/home.component';
import { ItemCreateComponent } from './views/dashboard/items/item-create/item-create.component';
import { ItemViewComponent } from './views/dashboard/items/item-view/item-view.component';
import { StoreCreateComponent } from './views/dashboard/stores/store-create/store-create.component';
import { StoreViewComponent } from './views/dashboard/stores/store-view/store-view.component';
import { SupplierCreateComponent } from './views/dashboard/suppliers/supplier-create/supplier-create.component';
import { SupplierViewComponent } from './views/dashboard/suppliers/supplier-view/supplier-view.component';

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
      {
        path: 'customers',
        children: [
          {
            path: 'view',
            component: CustomerViewComponent,
          },
          {
            path: 'create',
            component: CustomerCreateComponent,
          },
          { path: '', redirectTo: 'view', pathMatch: 'full' },
        ],
      },
      {
        path: 'suppliers',
        children: [
          {
            path: 'view',
            component: SupplierViewComponent,
          },
          {
            path: 'create',
            component: SupplierCreateComponent,
          },
          { path: '', redirectTo: 'view', pathMatch: 'full' },
        ],
      },
      {
        path: 'employees',
        children: [
          {
            path: 'view',
            component: EmployeeViewComponent,
          },
          {
            path: 'create',
            component: EmployeeCreateComponent,
          },
          { path: '', redirectTo: 'view', pathMatch: 'full' },
        ],
      },
      {
        path: 'stores',
        children: [
          {
            path: 'view',
            component: StoreViewComponent,
          },
          {
            path: 'create',
            component: StoreCreateComponent,
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
