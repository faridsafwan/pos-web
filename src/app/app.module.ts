import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { HomeComponent } from './views/dashboard/home/home.component';
import { LoginComponent } from './views/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebars/sidebar/sidebar.component';
import { DashboardNavbarComponent } from './components/navbars/dashboard-navbar/dashboard-navbar.component';
import { HeaderStatsComponent } from './components/headers/header-stats/header-stats.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { CardLineChartComponent } from './components/cards/card-line-chart/card-line-chart.component';
import { CardBarChartComponent } from './components/cards/card-bar-chart/card-bar-chart.component';
import { CardPageVisitsComponent } from './components/cards/card-page-visits/card-page-visits.component';
import { UserDropdownComponent } from './components/dropdowns/user-dropdown/user-dropdown.component';
import { MapMainComponent } from './components/maps/map-main/map-main.component';
import { ItemViewComponent } from './views/dashboard/items/item-view/item-view.component';
import { HeaderMainComponent } from './components/headers/header-main/header-main.component';
import { ItemCreateComponent } from './views/dashboard/items/item-create/item-create.component';
import { CustomerCreateComponent } from './views/dashboard/customers/customer-create/customer-create.component';
import { CustomerViewComponent } from './views/dashboard/customers/customer-view/customer-view.component';
import { SupplierViewComponent } from './views/dashboard/suppliers/supplier-view/supplier-view.component';
import { SupplierCreateComponent } from './views/dashboard/suppliers/supplier-create/supplier-create.component';
import { EmployeeCreateComponent } from './views/dashboard/employers/employee-create/employee-create.component';
import { EmployeeViewComponent } from './views/dashboard/employers/employee-view/employee-view.component';
import { StoreViewComponent } from './views/dashboard/stores/store-view/store-view.component';
import { StoreCreateComponent } from './views/dashboard/stores/store-create/store-create.component';
import { SalesComponent } from './views/dashboard/sales/sales.component';
import { ReceivingsComponent } from './views/dashboard/receivings/receivings.component';
import { CardItemComponent } from './components/cards/card-item/card-item.component';
import { CardRegisterComponent } from './components/cards/card-register/card-register.component';
import { CardActionItemComponent } from './components/cards/card-action-item/card-action-item.component';
import { CardSummaryItemComponent } from './components/cards/card-summary-item/card-summary-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    DashboardNavbarComponent,
    HeaderStatsComponent,
    CardStatsComponent,
    CardLineChartComponent,
    CardBarChartComponent,
    CardPageVisitsComponent,
    UserDropdownComponent,
    MapMainComponent,
    ItemViewComponent,
    HeaderMainComponent,
    ItemCreateComponent,
    CustomerCreateComponent,
    CustomerViewComponent,
    SupplierViewComponent,
    SupplierCreateComponent,
    EmployeeCreateComponent,
    EmployeeViewComponent,
    StoreViewComponent,
    StoreCreateComponent,
    SalesComponent,
    ReceivingsComponent,
    CardItemComponent,
    CardRegisterComponent,
    CardActionItemComponent,
    CardSummaryItemComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
