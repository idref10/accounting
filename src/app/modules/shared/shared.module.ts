import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { InvoiceService } from './services/invoices/invoice.service';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceDomainService } from './services/invoices/invoice-domain.service';
import { TaxesService } from './services/taxes/taxes.service';
import { ActionComponent } from './components/action/action.component';
import { TopNavigationComponent } from './components/navigation/top-navigation/top-navigation.component';
import { ActionService } from './services/action/action.service';
import { ToastModule } from 'primeng/toast';
import { RelationService } from './services/relations/relation.service';
import { RelationDomainService } from './services/relations/relation-domain.service';

@NgModule({
  declarations: [ActionComponent, TopNavigationComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastModule
  ],
  exports: [ActionComponent, TopNavigationComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [InvoiceService, InvoiceDomainService, TaxesService, ActionService, RelationService, RelationDomainService]
    };
  }
}
