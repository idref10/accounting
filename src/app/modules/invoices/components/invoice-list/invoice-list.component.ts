import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceList } from '../../../shared/services/domain/invoices/invoice-list';
import { Invoice } from '../../../shared/services/domain/invoices/invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  @Input()
  invoiceList: InvoiceList;

  @Output() onSelectedActionValues = new EventEmitter();

  invoices;
  selectedValues = [];
  onChange: boolean;

  ngOnInit() {
    this.invoices = this.invoiceList.getInvoices();
  }

  gotoInvoice(invoice: Invoice) {
    if(!this.onChange) {
      this.router.navigate([`invoice/${invoice.getId()}`]);
    }
    this.onChange = false;
  }

  onChangeCheckbox() {
    this.onChange = true;
    this.onSelectedActionValues.emit(this.selectedValues);
  }

}
