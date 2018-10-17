import { Component, Input, OnInit } from '@angular/core';
import { Relation } from '../../services/domain/relations/relation';

@Component({
  selector: 'app-relation-details',
  templateUrl: './relation-details.component.html',
  styleUrls: ['./relation-details.component.scss']
})
export class RelationDetailsComponent implements OnInit {

  @Input()
  relation: Relation;

  constructor() { }

  ngOnInit() {
  }

}
