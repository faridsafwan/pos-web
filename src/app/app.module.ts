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
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
