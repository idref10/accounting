import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceLinesComponent } from './invoice-lines.component';

describe('InvoiceLinesComponent', () => {
  let component: InvoiceLinesComponent;
  let fixture: ComponentFixture<InvoiceLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
