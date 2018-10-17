import { Invoice } from './invoice';

export class InvoiceList {
  private readonly invoices: Invoice[];

  constructor(obj) {
    this.invoices = obj.invoices;
  }

  getInvoices(): Invoice[] {
    return this.invoices;
  }
}
