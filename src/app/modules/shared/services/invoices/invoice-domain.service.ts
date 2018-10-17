import { InvoiceList } from '../domain/invoices/invoice-list';
import { IInvoice, Invoice } from '../domain/invoices/invoice';
import { IRelation, Relation } from '../domain/relations/relation';
import { IInvoiceLine, InvoiceLine } from '../domain/invoices/invoice-line';

export class InvoiceDomainService {
  constructor() { }

  createInvoiceListModel(data): InvoiceList {
    const items = data.map(item => this.createInvoiceItemModel(item));
    const obj = {
      invoices: items
    };
    return new InvoiceList(obj)
  }

  createInvoiceItemModel(data): Invoice {
    const itemData: IInvoice = {
      id: data.id,
      invoiceDate: data.invoiceDate,
      invoiceNumber: data.invoiceNumber,
      amount: data.amount,
      taxAmount: data.taxAmount,
      totalAmount: data.totalAmount,
      invoiceLines: this.createInvoiceLinesModel(data.invoiceLines),
      relation: this.createInvoiceRelationModel(data.relation)
    };
    return new Invoice(itemData);
  }

  createInvoiceRelationModel(data): Relation {
    const relationData: IRelation = {
      id: data.id,
      name: data.name,
      address: data.address,
      zip: data.zip,
      city: data.city
    };
    return new Relation(relationData);
  }

  createInvoiceLinesModel(data) {
    const items = data.map(item => this.createInvoiceLineModel(item));
    return items;
  }

  createInvoiceLineModel(data): InvoiceLine {
    const invoiceLineData: IInvoiceLine = {
      id: data.id,
      qty: data.qty,
      description: data.description,
      amount: data.amount,
      taxAmount: data.taxAmount,
      totalAmount: data.totalAmount,
      taxId: data.taxId,
      ledgerId: data.ledgerId
    };
    return new InvoiceLine(invoiceLineData);
  }
}
