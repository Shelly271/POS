import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAuthCompletionComponent } from './pre-auth-completion.component';

describe('PreAuthCompletionComponent', () => {
  let component: PreAuthCompletionComponent;
  let fixture: ComponentFixture<PreAuthCompletionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreAuthCompletionComponent]
    });
    fixture = TestBed.createComponent(PreAuthCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
