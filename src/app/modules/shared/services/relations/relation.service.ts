import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RelationDomainService } from './relation-domain.service';

@Injectable({
  providedIn: 'root'
})
export class RelationService {

  constructor(private http: HttpClient, private relationDomainService: RelationDomainService) { }

  getAll(): Observable<any> {
    return this.http.get('/api/relations')
      .pipe(
        map((data: any) => this.relationDomainService.createRelationListModel(data))
      );
  }

  getFiltered(first): Observable<any> {

    let httpParams = new HttpParams();

    httpParams = httpParams.set('first', first);

    return this.http.get('/api/relations', { params: httpParams})
      .pipe(
        map((data: any) => this.relationDomainService.createRelationListModel(data))
      );
  }

}
