import { RelationList } from '../domain/relations/relation-list';
import { IRelation, Relation } from '../domain/relations/relation';

export class RelationDomainService {
  constructor() {}

  createRelationListModel(data): RelationList {
    const items = data.relations.map(item => this.createRelationItemModel(item));
    const obj = {
      relations: items,
      totalNumberRelations: data.metaData.totalNumberRows
    };
    return new RelationList(obj)
  }

  createRelationItemModel(data): Relation {
    const itemData: IRelation = {
      id: data.id,
      name: data.name,
      address: data.address,
      zip: data.zip,
      city: data.city
    };
    return new Relation(itemData);
  }
}
