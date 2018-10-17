import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: HttpClient) { }

  startAction(actionType, action, items): Observable<any> {
    return this.http.post(`/api/${actionType}/${action}`, items);
  }

}
