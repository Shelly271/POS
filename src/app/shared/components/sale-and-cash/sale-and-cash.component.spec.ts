import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAndCashComponent } from './sale-and-cash.component';

describe('SaleAndCashComponent', () => {
  let component: SaleAndCashComponent;
  let fixture: ComponentFixture<SaleAndCashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleAndCashComponent]
    });
    fixture = TestBed.createComponent(SaleAndCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
