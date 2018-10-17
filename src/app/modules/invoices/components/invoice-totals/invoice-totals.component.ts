import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-totals',
  templateUrl: './invoice-totals.component.html',
  styleUrls: ['./invoice-totals.component.css']
})
export class InvoiceTotalsComponent implements OnInit {

  @Input()
  invoiceTotals;

  constructor() { }

  ngOnInit() {
  }

}
