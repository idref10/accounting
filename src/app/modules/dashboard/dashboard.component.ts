import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  yearlyProfits;
  currentYear: string;

  constructor(private dashboardService: DashboardService) {
    this.currentYear = '2018';
  }

  ngOnInit() {
    this.dashboardService.getProfits(this.currentYear)
      .subscribe(response => {
        this.yearlyProfits = response;
      });
  }

}
