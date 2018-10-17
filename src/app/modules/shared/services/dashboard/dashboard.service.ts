import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getProfits(year: string): Observable<any> {
    return this.http.get(`/api/dashboard/profits/${year}`);
  }


}
