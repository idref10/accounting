import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InvoiceLine } from '../../../shared/services/domain/invoices/invoice-line';

@Component({
  selector: 'app-invoice-lines',
  templateUrl: './invoice-lines.component.html',
  styleUrls: ['./învoice-lines.component.css']
})
export class InvoiceLinesComponent implements OnInit {

  @Input()
  invoiceLines: InvoiceLine[];

  @Input()
  taxes;

  @Output() onCalculateLineTotals = new EventEmitter();

  taxList;

  constructor() {

  }

  ngOnInit() {
    this.createTaxList();
    this.initInvoiceLines();
  }

  initInvoiceLines() {
    this.invoiceLines.forEach((invoiceLine) => {
      this.calculateLineTotals(invoiceLine);
    })
  }

  calculateLineTotals(invoiceLine: InvoiceLine) {
    invoiceLine.setLineTotals(this.getTaxItem(invoiceLine.getTaxId()));
    this.onCalculateLineTotals.emit();
  }

  onInvoiceLineChange(invoiceLine: InvoiceLine) {
    this.calculateLineTotals(invoiceLine);
  }

  getTaxItem(invoiceLineTaxId) {
    return this.taxes.items.find(tax => tax.id === invoiceLineTaxId);
  }

  createTaxList() {
    this.taxList = this.taxes.items.map((tax) => {
      const item = {
        label: tax.label,
        value: tax.id
      }
      return item;
    });
  }
}
