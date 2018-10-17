export interface IInvoiceLine {
  id: string;
  qty: number;
  description: string;
  amount: number;
  taxAmount: number;
  totalAmount: number;
  taxId: string;
  ledgerId: string;
}

export class InvoiceLine {
  private readonly id: string;
  private qty: number;
  private description: string;
  private amount: number;
  private readonly taxAmount: number;
  private totalAmount: number;
  private taxId: string;
  private ledgerId: string;

  constructor(data) {
    this.id = data.id;
    this.qty = data.qty;
    this.description = data.description;
    this.amount = data.amount;
    this.taxAmount = data.taxAmount;
    this.totalAmount = data.totalAmount;
    this.taxId = data.taxId;
    this.ledgerId = data.ledgerId;
  }

  getQty() {
    return this.qty;
  }

  setQty(value) {
    this.qty = value;
  }

  getDescription() {
    return this.description;
  }

  setDescription(value) {
    this.description = value;
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

  getTaxId() {
    return this.taxId;
  }

  setTaxId(value) {
    this.taxId = value;
  }

  getTotalAmount() {
    return this.totalAmount;
  }

  setLineTotals(taxItem) {
    this.totalAmount = this.qty * (Number(this.amount) + Number(this.amount * (taxItem.percentage / 100)));
  }
}
