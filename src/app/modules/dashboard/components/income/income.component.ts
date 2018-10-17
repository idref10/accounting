import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  data: any;

  @Input()
  yearlyProfits;

  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Income 2018',
          data: this.yearlyProfits,
          fill: true,
          borderColor: '#736cc7',
          backgroundColor: 'rgba(115, 108, 199, 0.1)'
        },
        {
          label: 'Expenses 2018',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: true,
          borderColor: '#F64A91',
          backgroundColor: 'rgba(246, 74, 145, 0.1)'
        }
      ]
    }
  }
}
