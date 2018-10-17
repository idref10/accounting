import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/index';
import { InvoiceList } from '../../../shared/services/domain/invoices/invoice-list';
import { InvoiceService } from '../../../shared/services/invoices/invoice.service';
import { ActionComponent } from '../../../shared/components/action/action.component';

@Component({
  selector: 'app-invoice-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class InvoiceOverviewComponent implements OnInit {
  @ViewChild(ActionComponent) actionDirective:ActionComponent;

  constructor(private invoicesService: InvoiceService) { }

  invoiceList$: Observable<InvoiceList>
  selectedActionValues;
  loading;

  ngOnInit() {
    this.invoiceList$ = this.invoicesService.getAll();
  }

  setSelectedActionValues(value) {
    this.selectedActionValues = value;
  }

  setLoading(value) {
    this.loading = value;
  }
}
