import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvoiceDomainService } from './invoice-domain.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient, private invoiceDomainService: InvoiceDomainService) { }

  getAll(): Observable<any> {
    return this.http.get('/api/invoices')
      .pipe(
        map((data: any) => this.invoiceDomainService.createInvoiceListModel(data.invoices))
      );
  }

  get(invoiceId: string): Observable<any> {
    return this.http.get(`/api/invoice/${invoiceId}`)
      .pipe(
        map((data: any) => this.invoiceDomainService.createInvoiceItemModel(data))
      );
  }
}
