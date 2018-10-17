import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../../shared/services/invoices/invoice.service';
import { Invoice } from '../../../shared/services/domain/invoices/invoice';
import { ActivatedRoute } from '@angular/router';
import { TaxesService } from '../../../shared/services/taxes/taxes.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor(private invoiceService: InvoiceService, private route: ActivatedRoute, private taxesService: TaxesService) { }

  invoice: Invoice;
  taxes;

  ngOnInit() {
    this.invoiceService.get(this.route.snapshot.params['id'])
      .subscribe(response => {
        this.invoice = response;
      });

    this.taxesService.getAll()
      .subscribe(response => {
        this.taxes = response;
      });
  }

  setInvoiceTotals() {
    this.invoice.calculateTotals();
  }

  saveInvoice() {
    console.log('Invoice model', this.invoice);
  }
}
