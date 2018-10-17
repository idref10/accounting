import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTotalsComponent } from './invoice-totals.component';

describe('InvoiceTotalsComponent', () => {
  let component: InvoiceTotalsComponent;
  let fixture: ComponentFixture<InvoiceTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceTotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
