import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/index';
import { InvoiceList } from '../../../shared/services/domain/invoices/invoice-list';
import { ActionComponent } from '../../../shared/components/action/action.component';
import { RelationService } from '../../../shared/services/relations/relation.service';

@Component({
  selector: 'app-relation-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class RelationOverviewComponent implements OnInit {
  @ViewChild(ActionComponent) actionDirective:ActionComponent;

  constructor(private relationService: RelationService) { }

  relationList$: Observable<InvoiceList>
  selectedActionValues;
  loading;

  ngOnInit() {
    this.relationList$ = this.relationService.getAll();
  }

  setSelectedActionValues(value) {
    this.selectedActionValues = value;
  }

  setLoading(value) {
    this.loading = value;
  }
}
