import { Component, Input, OnInit } from '@angular/core';
import { RelationList } from '../../../shared/services/domain/relations/relation-list';
import { Relation } from '../../../shared/services/domain/relations/relation';
import { LazyLoadEvent } from 'primeng/api';
import { RelationService } from '../../../shared/services/relations/relation.service';

@Component({
  selector: 'app-relation-list',
  templateUrl: './relation-list.component.html',
  styleUrls: ['./relation-list.component.css']
})
export class RelationListComponent implements OnInit {

  constructor(private relationService: RelationService) { }

  @Input()
  relationList: RelationList;

  relations: Relation[];

  cols: any[];

  totalRecords: number;

  loading: boolean;

  initialLoading: boolean = true;

  ngOnInit() {
    this.relations = this.relationList.getRelations();
    this.totalRecords = this.relationList.getTotalNumberRelations();

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'city', header: 'City' }
    ];
  }

  loadRelationsLazy(event: LazyLoadEvent) {
    if(!this.initialLoading) {

      //in a real application, make a remote request to load data using state metadata from event
      //event.first = First row offset
      //event.rows = Number of rows per page
      //event.sortField = Field name to sort with
      //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
      //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

      //imitate db connection over a network

      this.loading = true;

      this.relationService.getFiltered(event.first).subscribe(response => {
        this.relations = response.relations;
        this.loading = false;
      });
    } else {
      this.initialLoading = false;
    }
  }

}
