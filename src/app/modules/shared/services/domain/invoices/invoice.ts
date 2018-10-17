import { Relation } from '../relations/relation';
import { InvoiceLine } from './invoice-line';

export interface IInvoice {
  id: string;
  invoiceDate: string;
  invoiceNumber: string;
  amount: number;
  taxAmount: number;
  totalAmount: number;
  invoiceLines: InvoiceLine[];
  relation: Relation;
}

export class Invoice {
  private readonly id: string;
  private readonly invoiceDate: string;
  private readonly invoiceNumber: string;
  private amount: number;
  private taxAmount: number;
  private totalAmount: number;
  private readonly invoiceLines: InvoiceLine[];
  private readonly relation: Relation;

  constructor(data) {
    this.id = data.id;
    this.invoiceDate = data.invoiceDate;
    this.invoiceNumber = data.invoiceNumber;
    this.amount = data.amount;
    this.taxAmount = data.taxAmount;
    this.totalAmount = data.totalAmount;
    this.invoiceLines = data.invoiceLines;
    this.relation = data.relation;
  }

  getInvoiceNumber() {
    return this.invoiceNumber;
  }

  getRelation() {
    return this.relation;
  }

  getAmount() {
    return this.amount;
  }

  setAmount(value) {
    this.amount = value;
  }

  getTaxAmount() {
    return this.taxAmount;
  }

  setTaxAmount(value) {
    this.taxAmount = value;
  }

  getTotalAmount() {
    return this.totalAmount;
  }

  setTotalAmount(value) {
    this.totalAmount = value;
  }

  getId() {
    return this.id;
  }

  getInvoiceLines() {
    return this.invoiceLines;
  }

  getInvoiceTotals() {
    const invoiceTotals = {
      amount: this.amount,
      taxAmount: this.taxAmount,
      totalAmount: this.totalAmount
    }
    return invoiceTotals;
  }

  calculateTotals() {
    let invoiceTotals: number = 0;
    let amountTotals: number = 0;
    let taxAmountTotals: number = 0;
    this.invoiceLines.forEach((invoiceLine) => {
      invoiceTotals += Number(invoiceLine.getTotalAmount());
      amountTotals += Number(invoiceLine.getQty() * invoiceLine.getAmount());
      taxAmountTotals += Number(invoiceLine.getQty() * (invoiceLine.getAmount() * (invoiceLine.getTaxAmount() / 100) ));
    });

    this.setAmount(amountTotals);
    this.setTaxAmount(taxAmountTotals);
    this.setTotalAmount(invoiceTotals);
  }
}
