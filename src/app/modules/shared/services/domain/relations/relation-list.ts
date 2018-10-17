import { Relation } from './relation';

export class RelationList {
  private readonly relations: Relation[];
  private readonly totalNumberRelations: number;

  constructor(obj) {
    this.relations = obj.relations;
    this.totalNumberRelations = obj.totalNumberRelations;
  }

  getRelations(): Relation[] {
    return this.relations;
  }

  getTotalNumberRelations() {
    return this.totalNumberRelations;
  }
}
