export interface IRelation {
  id: string;
  name: string;
  address: string;
  zip: string;
  city: string;
}

export class Relation {
  private readonly id: string;
  private readonly name: string;
  private readonly address: string;
  private readonly zip: string;
  private readonly city: string;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.address = data.address;
    this.zip = data.zip;
    this.city = data.city;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }

  getZip() {
    return this.zip;
  }

  getCity() {
    return this.city;
  }
}
