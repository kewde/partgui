import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BsDropdownModule, CollapseModule, ModalModule, PaginationModule } from 'ngx-bootstrap';
import { NgxElectronModule } from 'ngx-electron';

import { SharedModule } from './shared/shared.module';
import { SidebarModule } from './core/sidebar/sidebar.module';
import { WalletModule } from './wallet/wallet.module';
import { ModalsModule } from './modals/modals.module';

import { WindowService } from './core/window.service';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { StatusComponent } from './core/status/status.component';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent, data: { title: 'Overview' } },
  { path: 'settings', component: SettingsComponent, data: { title: 'Settings' } },
  { path: '**', redirectTo: 'overview', pathMatch: 'full' } // Catch all route
];

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    OverviewComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    NgxElectronModule,
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    SharedModule,
    SidebarModule.forRoot(),
    WalletModule.forRoot(),
    ModalsModule
  ],
  providers: [
    WindowService,
    AppService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
