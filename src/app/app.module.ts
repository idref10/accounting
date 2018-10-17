import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/Nl';

registerLocaleData(localeNl, 'nl');

import { AppComponent } from './app.component';
import { InvoiceListComponent } from './modules/invoices/components/invoice-list/invoice-list.component';
import { SharedModule } from './modules/shared/shared.module';
import { InvoiceOverviewComponent } from './modules/invoices/pages/overview/overview.component';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './modules/invoices/pages/invoice/invoice.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { RelationDetailsComponent } from './modules/shared/components/relation-details/relation-details.component';
import { InvoiceLinesComponent } from './modules/invoices/components/invoice-lines/invoice-lines.component';
import { InvoiceTotalsComponent } from './modules/invoices/components/invoice-totals/invoice-totals.component';
import { DropdownModule, ChartModule, CheckboxModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './modules/shared/components/navigation/sidebar/sidebar.component';
import { IncomeComponent } from './modules/dashboard/components/income/income.component';
import { RelationOverviewComponent } from './modules/relations/pages/overview/overview.component';
import { RelationListComponent } from './modules/relations/components/relation-list/relation-list.component';
import { TableModule } from 'primeng/table';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'relations', component: RelationOverviewComponent },
  { path: 'invoices', component: InvoiceOverviewComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'invoice/:id', component: InvoiceComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent,
    InvoiceOverviewComponent,
    InvoiceComponent,
    DashboardComponent,
    RelationDetailsComponent,
    RelationOverviewComponent,
    InvoiceLinesComponent,
    InvoiceTotalsComponent,
    SidebarComponent,
    IncomeComponent,
    RelationListComponent,
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    ChartModule,
    CheckboxModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'nl' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
